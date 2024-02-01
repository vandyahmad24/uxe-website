import type { Meta, StoryObj } from '@storybook/react';

import { Post } from './Post';
import dt from './post-data.json'

const meta: Meta<typeof Post> = {
  title: 'UI/Component/Post',
  component: Post,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Post>;

export const Default: Story = {
  args: {
    data: dt
  },
};
