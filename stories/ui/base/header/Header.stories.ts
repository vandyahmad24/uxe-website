import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import dt from './header-data.json'

const meta: Meta<typeof Header> = {
  title: 'UI/Base/Header',
  component: Header,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "Discover Innovation in Smart Security Products",
    subtitle: "OUR PRODUCT",
    description: "Intelligent Security Beyond Cameras: Seamless Solutions for Government and Business Environments",
    video_url: "https://api.uxe.ai/wp-content/uploads/2024/01/career-background.png"
  },
};
