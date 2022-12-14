
# Moner Managey

### :construction: WORK IN PROGRESS :construction:

Single user income and expense tracker, created as a part of Alura's Backend Challenge event.

## API Reference

#### Get all resource data

```
  GET /income
```
Returns all income registries.
<br><br>

```
  GET /expense
```
Returns all expense registries.

<br>

#### Add new entry to a resource

```
  POST /income
```

| Parameter          | Type     | Description   |
| :----------------- | :------- | :------------ |
| `description`      | `string` | **Required**. |
| `amount`           | `string` | **Required**. |
| `date `            | `Date`   | **Required**. |

Incomes are required to have unique descriptions within any given month.
<br>
<br>
```
  POST /expense
```

| Parameter          | Type     | Description   |
| :----------------- | :------- | :------------ |
| `description`      | `string` | **Required**. |
| `amount`           | `string` | **Required**. |
| `date `            | `Date`   | **Required**. |

Expenses are required to have unique descriptions within any given month.

<br>

#### Update resource

```
  PUT /income/${id}
```

| Parameter          | Type     | Description   |
| :----------------- | :------- | :------------ |
| `id`               | `string` | **Required**. |
| `description`      | `string` | **Required**. |
| `amount`           | `string` | **Required**. |
| `date `            | `Date`   | **Required**. |

Incomes are required to have unique descriptions within any given month.
<br>
<br>
```
  PUT /expense/${id}
```

| Parameter          | Type     | Description   |
| :----------------- | :------- | :------------ |
| `id`               | `string` | **Required**. |
| `description`      | `string` | **Required**. |
| `amount`           | `string` | **Required**. |
| `date `            | `Date`   | **Required**. |

Expenses are required to have unique descriptions within any given month.

<br>

#### Delete resource

```
  DELETE /income/${id}
```
Deletes the desired income.
<br>
<br>
```
  DELETE /expense/${id}
```
Deletes the desired expense.
