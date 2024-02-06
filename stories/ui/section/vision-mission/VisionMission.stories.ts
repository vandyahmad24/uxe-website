import type { Meta, StoryObj } from '@storybook/react';

import { VisionMission } from './VisionMission';
import dt from './vision-mission-data.json'

const meta: Meta<typeof VisionMission> = {
  title: 'UI/Component/Vision Mission',
  component: VisionMission,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof VisionMission>;

export const Default: Story = {
  args: {
    data: dt
  },
};
