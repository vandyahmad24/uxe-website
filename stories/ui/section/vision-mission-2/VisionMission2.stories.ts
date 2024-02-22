import type { Meta, StoryObj } from '@storybook/react';

import { VisionMission2 } from './VisionMission2';
import dt from './vision-mission-2-data.json'

const meta: Meta<typeof VisionMission2> = {
  title: 'UI/Component/Vision Mission 2',
  component: VisionMission2,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof VisionMission2>;

export const Default: Story = {
  args: {
    data: dt
  },
};
