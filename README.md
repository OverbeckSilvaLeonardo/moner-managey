
# Moner Managey

Single user income and expense tracker, created as a part of Alura's Backend Challenge event.

## API Reference

#### Get all resource data

```http
  GET /income
```
Returns all income registries.
<br><br>

```http
  GET /expense
```
Returns all expense registries.

<br><br>

#### Add new entry to a resource

```http
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
```http
  POST /expense
```

| Parameter          | Type     | Description   |
| :----------------- | :------- | :------------ |
| `description`      | `string` | **Required**. |
| `amount`           | `string` | **Required**. |
| `date `            | `Date`   | **Required**. |

Expenses are required to have unique descriptions within any given month.

<br><br>

#### Update resource

```http
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
```http
  PUT /expense/${id}
```

| Parameter          | Type     | Description   |
| :----------------- | :------- | :------------ |
| `id`               | `string` | **Required**. |
| `description`      | `string` | **Required**. |
| `amount`           | `string` | **Required**. |
| `date `            | `Date`   | **Required**. |

Expenses are required to have unique descriptions within any given month.

<br><br>

#### Delete resource

```http
  DELETE /income/${id}
```
<br>
<br>
Deletes the desired income.

```http
  DELETE /expense/${id}
```

Deletes the desired expense.
