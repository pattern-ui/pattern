import { storiesOf } from '@storybook/react';
import * as demos from './index';
import { attachDemos } from '../../attach-demos';

attachDemos(storiesOf('Hooks', module), demos);
