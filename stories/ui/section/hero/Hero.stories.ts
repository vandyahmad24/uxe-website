import type { Meta, StoryObj } from '@storybook/react';

import { HeroImage } from './HeroImage';
import dt from './hero-data.json'

const meta: Meta<typeof HeroImage> = {
  title: 'UI/Base/Hero',
  component: HeroImage,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    data: dt
  },
};
