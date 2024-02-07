import type { Meta, StoryObj } from '@storybook/react';

import { Product } from './Product';
import dt from './product-data.json'

const meta: Meta<typeof Product> = {
  title: 'UI/Component/Product',
  component: Product,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Product>;

export const Default: Story = {
  args: {
    data: dt
  },
};
