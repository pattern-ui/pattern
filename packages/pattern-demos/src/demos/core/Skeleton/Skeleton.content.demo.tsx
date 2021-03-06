import React, { useState } from 'react';
import { Group, Button, Text, Skeleton } from '@pattern-ui/core';

export default function Demo() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Skeleton visible={loading}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolor nihil amet tempore
          magnam optio, numquam nostrum inventore tempora assumenda saepe, aut repellat. Temporibus
          aspernatur aperiam magnam debitis facere odio?
        </Text>
        <Text>
          Laborum fuga quam voluptas aut pariatur delectus repudiandae commodi tempora debitis
          dolores vero cumque magni cum, deserunt, ad tempore consectetur libero molestias similique
          nemo eum! Dolore maxime voluptate inventore atque.
        </Text>
      </Skeleton>

      <Group position="center" mt="xs">
        <Button onClick={() => setLoading((l) => !l)}>Toggle Skeleton</Button>
      </Group>
    </>
  );
}
