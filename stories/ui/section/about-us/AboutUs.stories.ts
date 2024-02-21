import type { Meta, StoryObj } from '@storybook/react';

import { AboutUs } from './AboutUs';
import dt from './about-us-data.json'

const meta: Meta<typeof AboutUs> = {
  title: 'UI/Section/About Us',
  component: AboutUs,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AboutUs>;

export const Default: Story = {
  args: {
    data: { text: dt.text }
  },
};
