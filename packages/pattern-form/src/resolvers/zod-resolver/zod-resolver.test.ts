import { z } from 'zod';
import { testResolver, RESOLVER_ERROR_MESSAGES } from '../test-resolver';
import { zodResolver } from './zod-resolver';

describe('@pattern-ui/form zod resolver', () => {
  testResolver(
    zodResolver(
      z.object({
        name: z.string().min(2, { message: RESOLVER_ERROR_MESSAGES.name }),
        age: z.number().min(10, { message: RESOLVER_ERROR_MESSAGES.age }),
        fruits: z.array(
          z.object({
            name: z.string().min(2, { message: RESOLVER_ERROR_MESSAGES.fruitName }),
            stock: z.number().min(0, { message: RESOLVER_ERROR_MESSAGES.fruitStock }),
          })
        ),
      })
    )
  );
});
