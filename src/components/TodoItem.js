import React from 'react';
import { useState } from 'react';

export default function TodoItem({ title, id, completed }) {
  const [checked, setchecked] = useState(completed);

  const cls = ['todo'];

  if (checked) {
    cls.push('completed');
  }

  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setchecked(!checked)}
        />
        <span>{title}</span>

        <i className="material-icons red-text" onClick={() => {}}>
          delete
        </i>
      </label>
    </li>
  );
}
