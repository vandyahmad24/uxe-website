import type { Meta, StoryObj } from '@storybook/react';

import { MenuItem } from './MenuItem';
import dt from './menu-item-data.json'

const meta: Meta<typeof MenuItem> = {
  title: 'UI/Base/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
  args: {
    menu: dt
  },
};
