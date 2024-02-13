import type { Meta, StoryObj } from '@storybook/react';

import { WhyChooseUs } from './WhyChooseUs';
import dt from './why-choose-us-data.json'

const meta: Meta<typeof WhyChooseUs> = {
  title: 'UI/Section/Why Choose Us',
  component: WhyChooseUs,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WhyChooseUs>;

export const Default: Story = {
  args: {
    data: dt
  },
};
