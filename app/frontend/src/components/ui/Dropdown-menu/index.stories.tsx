import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
// Import all Dropdown Menu components
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  // ... other sub-components (if applicable)
} from '@/src/components/ui'
// Assuming your components are in a file named DropdownMenu.js

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof DropdownMenu> = {
  title: 'shared/DropdownMenu',
  component: DropdownMenu, // Use Trigger component for initial rendering
  parameters: {
    layout: 'centered', // Center the component in the Canvas
  },
  // This component will have an automatically generated Autodocs entry
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const Template: Story = {
  args: {
    // Provide default props for the Trigger component here
    children: 'Dropdown Menu', // Text displayed on the trigger button
  },
}

// Define individual stories for different use cases

export const BasicDropdown: Story = {
  ...Template,
  // Wrap dropdown content with DropdownMenu and use Trigger within it
  args: {
    children: (
      <DropdownMenu>
        <DropdownMenuTrigger>{Template.args?.children}</DropdownMenuTrigger>{' '}
        {/* Use Trigger within DropdownMenu */}
        <DropdownMenuContent>
          <DropdownMenuItem>Option 1</DropdownMenuItem>
          <DropdownMenuItem>Option 2</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Destructive Option</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
}

export const CheckboxDropdown: Story = {
  ...Template,
  render: (args) => {
    const [showStatusBar, setShowStatusBar] = useState(true)
    const [showActivityBar, setShowActivityBar] = useState(false)

    return (
      <DropdownMenu>
        <DropdownMenuTrigger>{args.children}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Option 1 (Checkbox)
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
          >
            Option 2 (Checkbox)
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const RadioDropdown: Story = {
  ...Template,
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState('option1')

    return (
      <DropdownMenu>
        <DropdownMenuTrigger>{args.children}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup
            value={selectedValue}
            onValueChange={setSelectedValue}
          >
            <DropdownMenuRadioItem value="option1">
              Option 1 (Radio)
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option2">
              Option 2 (Radio)
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option3">
              Option 3 (Radio)
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
