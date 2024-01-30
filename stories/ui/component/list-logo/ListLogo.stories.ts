import type { Meta, StoryObj } from '@storybook/react';

import { ListLogo } from './ListLogo';
import dt from './list-logo-data.json'

const meta: Meta<typeof ListLogo> = {
  title: 'UI/Component/List Logo',
  component: ListLogo,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ListLogo>;

export const Default: Story = {
  args: {
    label: "Trusted by hundreds of organizations",
    data: dt['list-logo'].data
  },
};
