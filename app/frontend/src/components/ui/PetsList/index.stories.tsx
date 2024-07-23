import { PetsList } from "@/src/components/ui";
import { getPetsListMockHandler } from "@/src/petstore";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "shared/PetsList",
  component: PetsList,
  parameters: {
    msw: {
      handlers: [getPetsListMockHandler()],
    },
  },
} satisfies Meta<typeof PetsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
