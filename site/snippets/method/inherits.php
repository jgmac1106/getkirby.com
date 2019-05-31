<?php if ($inherits): ?>
<h2 id="inherits"><a href="#inherits">Inherited from</a></h2>
<?= datatype(Html::a($inherits->url(), $inherits->className())) ?>
<?php endif ?>
