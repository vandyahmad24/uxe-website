import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';
import dt from './footer-data.json'

const meta: Meta<typeof Footer> = {
  title: 'UI/Base/Footer',
  component: Footer,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    data: dt
  },
};
