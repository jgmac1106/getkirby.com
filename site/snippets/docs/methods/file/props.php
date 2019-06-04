## The `$props` parameter

<table class="properties">
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>blueprint</td>
      <td><?= datatype('array') ?></td>
      <td>Blueprint definition</td>
    </tr>

    <tr>
      <td>content</td>
      <td><?= datatype('array') ?></td>
      <td>Field values</td>
    </tr>

    <tr>
      <td>filename</td>
      <td><?= datatype('string') ?></td>
      <td>Field values</td>
    </tr>

    <tr>
      <td>parent<?= cheatsheetRequired(true) ?></td>
      <td><?= datatype('Kirby\Cms\Model') ?></td>
      <td><code>$site</code>, <code>$page</code> or <code>$user</code></td>
    </tr>

    <tr>
      <td>root</td>
      <td><?= datatype('string') ?></td>
      <td></td>
    </tr>

    <tr>
      <td>source<?= cheatsheetRequired(true) ?></td>
      <td><?= datatype('string') ?></td>
      <td></td>
    </tr>

    <tr>
      <td>template</td>
      <td><?= datatype('string') ?></td>
      <td></td>
    </tr>

    <tr>
      <td>translations</td>
      <td><?= datatype('array') ?></td>
      <td>Language codes with subarrays of field values</td>
    </tr>

    <tr>
      <td>url</td>
      <td><?= datatype('string') ?></td>
      <td></td>
    </tr>
  </tbody>
</table>
