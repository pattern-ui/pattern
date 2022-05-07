import React from 'react';
import { Group, TextInput, Box, Text, Code, Button, Center } from '@pattern/core';
import { useForm, formList } from '@pattern/form';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { GripVertical } from 'tabler-icons-react';

function Demo() {
  const form = useForm({
    initialValues: {
      employees: formList([
        { name: 'John Doe', email: 'john@pattern-ui.design' },
        { name: 'Bill Love', email: 'bill@pattern-ui.design' },
        { name: 'Nancy Eagle', email: 'nanacy@pattern-ui.design' },
        { name: 'Lim Notch', email: 'lim@pattern-ui.design' },
        { name: 'Susan Seven', email: 'susan@pattern-ui.design' },
      ]),
    },
  });

  const fields = form.values.employees.map((_, index) => (
    <Draggable key={index} index={index} draggableId={index.toString()}>
      {(provided) => (
        <Group ref={provided.innerRef} mt="xs" {...provided.draggableProps}>
          <Center {...provided.dragHandleProps}>
            <GripVertical size={18} />
          </Center>
          <TextInput
            placeholder="John Doe"
            {...form.getListInputProps('employees', index, 'name')}
          />
          <TextInput
            placeholder="example@mail.com"
            {...form.getListInputProps('employees', index, 'email')}
          />
        </Group>
      )}
    </Draggable>
  ));

  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text weight={500} size="sm" sx={{ flex: 1 }}>
            Name
          </Text>
          <Text weight={500} size="sm" pr={90}>
            Status
          </Text>
        </Group>
      ) : (
        <Text color="dimmed" align="center">
          No one here...
        </Text>
      )}

      <DragDropContext
        onDragEnd={({ destination, source }) =>
          form.reorderListItem('employees', { from: source.index, to: destination.index })
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Group position="center" mt="md">
        <Button onClick={() => form.addListItem('employees', { name: '', email: '' })}>
          Add employee
        </Button>
      </Group>

      <Text size="sm" weight={500} mt="md">
        Form values:
      </Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>
    </Box>
  );
}

export const dnd: PatternDemo = {
  type: 'demo',
  component: Demo,
};
