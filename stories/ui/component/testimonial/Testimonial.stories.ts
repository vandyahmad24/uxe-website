import type { Meta, StoryObj } from '@storybook/react';

import { Testimonial } from './Testimonial';
import dt from './testimonial-data.json'

const meta: Meta<typeof Testimonial> = {
  title: 'UI/Component/Testimonial',
  component: Testimonial,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Testimonial>;

export const Default: Story = {
  args: {
    data: dt
  },
};
