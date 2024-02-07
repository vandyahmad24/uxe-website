import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from './Navigation';
import dt from './navigation-data.json'

const meta: Meta<typeof Navigation> = {
  title: 'UI/Base/Navigation',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    menu: dt
  },
};
