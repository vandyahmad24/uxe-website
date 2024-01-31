import type { Meta, StoryObj } from '@storybook/react';

import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'UI/Base/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Large: Story = {
  args: {
    size: 'large',
    cls: "bg-black",
    style: {width: "4000px", minHeight: "400px"}
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    cls: "bg-black",
    style: {width: "4000px", minHeight: "400px"}
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    cls: "bg-black",
    style: {width: "4000px", minHeight: "400px"}
  },
};
