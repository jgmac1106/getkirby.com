## The `$props` parameter

<table class="properies">
  <thead>
    <th>Property</th>
    <th>Type</th>
    <th>Description</th>
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
      <td>dirname</td>
      <td><?= datatype('string') ?></td>
      <td></td>
    </tr>

    <tr>
      <td>draft</td>
      <td><?= datatype('bool') ?></td>
      <td>If <code>true</code>, the page will be created as draft</td>
    </tr>

    <tr>
      <td>model</td>
      <td><?= datatype('string') ?></td>
      <td>Page model</td>
    </tr>

    <tr>
      <td>num</td>
      <td><?= datatype('mixed') ?></td>
      <td>Sorting number, use <code>null</code> for unlisted pages</td>
    </tr>

    <tr>
      <td>parent</td>
      <td><?= datatype('Kirby\Cms\Page') ?></td>
      <td>Parent page</td>
    </tr>

    <tr>
      <td>root</td>
      <td><?= datatype('string') ?></td>
      <td></td>
    </tr>

    <tr>
      <td>slug<?= cheatsheetRequired(true) ?></td>
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
