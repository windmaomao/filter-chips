# Chips Filter

```
npm install
npm start
```

## Setup

Find a file called `Filters.mock.ts`, and feel free to edit its content to add filter type as well as the operations that each support.

```
const numOps = ['=', '>', '<'];
const textOps = ['eq', 'notEq']
const filters: FilterType[] = [
  { id: 'name', ops: textOps },
  { id: 'status', ops: textOps },
  { id: 'date', ops: numOps },
  { id: 'min', ops: numOps },
  { id: 'max', ops: numOps },
  { id: 'space', ops: textOps },
  { id: 'language', ops: textOps },
  { id: 'color', ops: textOps },
  { id: 'first', ops: textOps },
  { id: 'last', ops: textOps },
];
```

## Design notes
- A multi-chips select widget overall;
- An auto-suggestion input box to the right, we’ll make the chips select and the auto-suggestion box part of the same widget through smart UI touch up; a popover that provides suggestion so we can create the right chip;
- Chip component, a button like item with a popover that provides grannual level control in terms of what can be filtered for that item;
- Prototype: https://codepen.io/windmaomao/pen/zYQZqXp . You can add a chip by selecting one of the items, and you can remove a chip by simply clicking on the chip. 

TODO:

- add keyboard support
