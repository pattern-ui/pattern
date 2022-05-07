import React from 'react';
import { TagInput } from '@pattern/labs';

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        label="Technologies that you're interested in"
        placeholder="Add react related packages"
        defaultValue={['react', 'react-router']}
        validationRegex={/react.*/}
        onValidationReject={() => {}}
      />
    </div>
  );
}

export const validationRegex: PatternDemo = {
  type: 'demo',
  component: Demo,
};
