import React, { useState } from 'react';
import { UserCheck, MailOpened, ShieldCheck } from 'tabler-icons-react';
import { Stepper } from '@pattern/core';

export default function Demo() {
  const [active, setActive] = useState(0);
  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<UserCheck size={18} />} />
      <Stepper.Step icon={<MailOpened size={18} />} />
      <Stepper.Step icon={<ShieldCheck size={18} />} />
    </Stepper>
  );
}
