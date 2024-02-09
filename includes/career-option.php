<?php
// includes/career-list.php

// Create sub-menu
function career_option_menu() {
  add_submenu_page(
    'cms-setting',
    'Careers',
    'Careers',
    'manage_options',
    'career-option',
    'career_option_page'
  );
}
add_action('admin_menu', 'career_option_menu');

function career_option_graphql() {
  register_graphql_field(
    'RootQuery',
    'career_options',
    [
      'type' => ['list_of' => 'CustomCareerType'], // Define CustomCareerType below
      'resolve' => function () {
        return get_option('career_options', array()); // Replace 'career_options' with the name of your option
      },
    ]
  );

  register_graphql_object_type(
    'CustomCareerType',
    [
      'description' => 'Custom career type',
      'fields' => [
        'title' => [
          'type' => 'String',
          'description' => 'Career Title',
          'resolve' => function ($career_option) {
            return isset($career_option['title']) ? stripslashes($career_option['title']) : null;
          },
        ],
        'description' => [
          'type' => 'String',
          'description' => 'Career Description',
          'resolve' => function ($career_option) {
            return isset($career_option['description']) ? stripslashes($career_option['description']) : null;
          },
        ],
        'job_type' => [
          'type' => 'String',
          'description' => 'Job Type',
          'resolve' => function ($career_option) {
            return isset($career_option['job_type']) ? stripslashes($career_option['job_type']) : null;
          },
        ],
        'external_link' => [
          'type' => 'String',
          'description' => 'External Link',
          'resolve' => function ($career_option) {
            return isset($career_option['external_link']) ? esc_url(stripslashes($career_option['external_link'])) : null;
          },
        ],
      ],
    ]
  );
}
add_action('graphql_register_types', 'career_option_graphql');

// Career List page content
function career_option_page() {
  // Process career deletion
  if (isset($_GET['action']) && $_GET['action'] === 'delete' && isset($_GET['career_id'])) {
    $career_id = intval($_GET['career_id']);
    career_delete($career_id);
  }

  if (!did_action('wp_enqueue_media')) {
    wp_enqueue_media();
  }

  // Process form submission
  if (isset($_POST['submit_career_options'])) {
    // Check if it's an edit or add operation
    $edit_career_id = isset($_POST['edit_career_id']) ? intval($_POST['edit_career_id']) : -1;

    // Sanitize input data
    $career_title = sanitize_text_field($_POST['career_title']);
    $career_description = sanitize_textarea_field($_POST['career_description']);
    $career_job_type = sanitize_text_field($_POST['job_type']);
    $career_external_link = esc_url_raw($_POST['external_link']);

    // Get existing careers
    $career_option = get_option('career_options', array());

    // Add or update career
    if ($edit_career_id !== -1 && isset($career_option[$edit_career_id])) {
      // Editing an existing career
      $career_option[$edit_career_id]['title'] = $career_title;
      $career_option[$edit_career_id]['description'] = $career_description;
      $career_option[$edit_career_id]['job_type'] = $career_job_type;
      $career_option[$edit_career_id]['external_link'] = $career_external_link;
    } else {
      // Adding a new career
      $new_career = array(
        'title' => $career_title,
        'description' => $career_description,
        'job_type' => $career_job_type,
        'external_link' => $career_external_link,
      );

      $career_option[] = $new_career;
    }

    // Update option
    update_option('career_options', $career_option);

    // Clear edit career id after submission
    unset($_POST['edit_career_id']);
  }

  // Display existing careers in a table
  $career_option = get_option('career_options', array());
  $edit_career_id = isset($_GET['action']) && $_GET['action'] === 'edit' ? intval($_GET['career_id']) : -1;
  ?>
  <div class="wrap">
    <h1>Career List</h1>
    <!-- Career List form goes here -->
    <form method="post" action="" class="form-wrap" enctype="multipart/form-data">
      <?php if ($edit_career_id !== -1 && isset($career_option[$edit_career_id])) : ?>
        <input type="hidden" name="edit_career_id" value="<?php echo $edit_career_id; ?>">
      <?php endif; ?>

      <label for="career-title">Title:</label>
      <input type="text" id="career-title" name="career_title" placeholder="Career Title" value="<?php echo esc_attr($edit_career_id !== -1 ? stripslashes($career_option[$edit_career_id]['title']) : ''); ?>" required>
      <br>

      <label for="career-description">Description:</label>
      <textarea id="career-description" rows="8" name="career_description" placeholder="Career Description" required><?php echo esc_textarea($edit_career_id !== -1 ? stripslashes($career_option[$edit_career_id]['description']) : ''); ?></textarea>
      <br>

      <label for="job-type">Job Type:</label>
      <input type="text" id="job-type" name="job_type" placeholder="Job Type" value="<?php echo esc_attr($edit_career_id !== -1 ? stripslashes($career_option[$edit_career_id]['job_type']) : ''); ?>" required>
      <br>

      <label for="external-link">External Link:</label>
      <input type="url" id="external-link" name="external_link" placeholder="External Link" value="<?php echo esc_url($edit_career_id !== -1 ? stripslashes($career_option[$edit_career_id]['external_link']) : ''); ?>">
      <br>

      <input type="submit" name="submit_career_options" class="image-upload-btn" value="<?php echo $edit_career_id !== -1 ? 'Update Career' : 'Add Career'; ?>">
    </form>

    <h2>Existing Careers</h2>
    <?php if (!empty($career_option)) : ?>
      <table class="wp-list-table widefat fixed striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Job Type</th>
            <th>External Link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($career_option as $career_index => $career_value) : ?>
            <tr>
              <td><?php echo $career_index + 1; ?></td>
              <td><?php echo esc_html(stripslashes($career_value['title'])); ?></td>
              <td><?php echo esc_html(stripslashes($career_value['description'])); ?></td>
              <td><?php echo esc_html(stripslashes($career_value['job_type'])); ?></td>
              <td><a href="<?php echo esc_url(stripslashes($career_value['external_link'])); ?>" target="_blank"><?php echo esc_url($career_value['external_link']); ?></a></td>
              <td>
                <a href="?page=career-option&action=edit&career_id=<?php echo $career_index; ?>" class="button button-primary">Edit</a>
                <a href="?page=career-option&action=delete&career_id=<?php echo $career_index; ?>" class="button button-secondary" onclick="return confirm('Are you sure you want to delete this career?')">Delete</a>
              </td>
            </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
    <?php else : ?>
      <p>No careers added yet.</p>
    <?php endif; ?>
  </div>
<?php
}

// Delete a career
function career_delete($career_id) {
  // Get existing careers
  $career_option = get_option('career_options', array());

  // Remove the career at the specified index
  if (isset($career_option[$career_id])) {
    unset($career_option[$career_id]);

    // Update option
    update_option('career_options', $career_option);

    // Redirect back to the career list page
    ?>
    <script>
      window.location.href = "<?php echo admin_url('admin.php?page=career-option'); ?>";
    </script>
    <?php
    exit;
  } else {
    // Career not found, handle error or just redirect
    ?>
    <script>
      window.location.href = "<?php echo admin_url('admin.php?page=career-option'); ?>";
    </script>
    <?php
    exit;
  }
}
?>
