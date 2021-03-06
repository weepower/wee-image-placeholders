[![Wee](https://www.weepower.com/repo/logo.svg)](https://www.weepower.com)

Wee module to create placeholders for testing and wireframing.

## Usage

Default placeholder with 16:9 fluid ratio.

```html
<img data-placeholder>
```

Override the ratio by setting the value of the `data-placeholder` attribute.

```html
<img data-placeholder="2:1">
```

To disable fluid width set the `data-fluid` attribute to false.

```html
<img data-placeholder data-fluid="false">
```

By default the current dimensions of the placeholder are output on the image. Specify the text by setting the `data-text` attribute.

```html
<img data-placeholder data-text="Primary Image">
```

You can customize the default styling of the placeholders by overriding the default modules variables.

## Get Started

Install the module using one of these methods:

* [Download the latest release](https://github.com/weepower/wee-image-placeholders/archive/master.zip) or
* Clone the repository from `git clone git://github.com/weepower/wee-image-placeholders.git`

Then place the "wee-image-placeholders" folder in your source/modules directory.

## Bugs

Have a bug or a feature request? [Open a new issue](https://github.com/weepower/wee-image-placeholders/issues).  
To view the working to-do list check out our public [Trello board](https://trello.com/b/7KbnQra9/wee).

## Versioning

Wee adheres to [Semantic Versioning](http://semver.org/) in the form of MAJOR.MINOR.PATCH.  
Regardless of version we recommend thoroughly reviewing the [release notes](https://github.com/weepower/wee/releases) before updating.

## Community

Keep track of development and news by following [@weecss](https://twitter.com/weecss) on Twitter.

## License

Copyright 2016 [Caddis Interactive, LLC](https://www.caddis.co). Licensed under the [Apache License, Version 2.0](https://github.com/weepower/wee/blob/master/LICENSE).