# Costume

Costume is designed to be a user friendly vector editor, based on that of the Scratch Paint editor. Its goal is not to be feature heavy but rather to make creating sprites with it a smooth and wonderful experience.

When finished, it will be downloadable as an executable app, I hope to support more than just windows too, and perhaps even have a web editor version.

It’s worth noting that Costume is based on the [PenguinMod](https://github.com/PenguinMod/PenguinMod-Paint) version of the paint editor, so things like skewing and snapping will already be added. Many addons part of Scratch Addons may also become part of the editor.


## General

- ### Bitmap

  - Bitmap will be entirely removed, however you can still import images into a vector work.

- ### Tools and Functions

  - Tools and Functions now have pages and are ordered by potential use, lesser often used things will be at the end of the pages.

- ### Image Size

  - The edges of the document are no longer inaccessible, shapes will be allowed to be dragged there, but they may not show up in the final SVG.

  - The viewbox and the actual document size will be able to be adjusted by hand. But by default the viewbox is automatically calculated as it normally is.

- ### Tabs

  - The costume sidebar will be repurposed as a multi-document editor, allowing for easy transfer of content between files.

- ### Color Selector

  - Add some preset color swatches. And maybe even a way to save them to the document.

  - The 2.0 ones :)

- ### Unsaved Reminder

  - An asterisk along with the document name will appear in the page title, unsaved changes will result in a warning when trying to leave/close the app


## Functions (Internally called fixed-tools)

- ### Costume Name

  - The costume name will be replaced with the document name

- ### Document Settings

  - The top bar will also feature image size options and a menu to crop the image to your work however you see fit.

- ### Image Import

  - This will bring up a prompt allowing you to add an svg image or bitmap.

  - When importing SVG, you will be asked if you wish to add it to the document (grouped or not) as more svg, or add it as bitmap.

  - When importing a bitmap, you will have quality options you can adjust.

- ### Save/Save as

  - These are a given, I think it’s fairly obvious how this will work.

  - It’s important to note that Costume will not automatically try to modify the file you open unless you save it to the same destination.

    - Essentially, ‘Save’ and ‘Save as’ work the same until you save for the first time.

- ### Export

  - Brings a popup menu allowing you to export your SVG image into different formats like png, jpg, and even favicon. It will have options for image resolution and such.

  - Even though this pops up every export click, the options save to the document, allowing for easy exporting.

- ### Info

  - Provides info such as how big the drawing is in pixels.


## Bottom Bar Functions (These are part of paint-editor)

- ### Zoom (Modifications)

  - A slider and percentage for precise zoom control. :P

- ### Layers

  - A new pop up menu via a button will allow you to lock certain shapes and groups, and create/modify arbitrary layers.

- ### Grid

  - Options to snap points, shapes, etc to a grid that saves to the document. Very nice for tilesets and such.

- ### Snapping

  - This allows you to adjust things such as what angles holding shift snaps to for shapes and lines or the distance holding shift while moving a shape will snap to its original spot.


## Tools (Internally called mode-tools)

- ### Select (Modifications)

  - Set blending mode, options are the ones available in inkscape but add and multiply are at the top and it’s ordered by use.

  - Set line/shape order (does the fill layer over the lines or vice versa?)

- ### Reshape (Modifications)

  - Set line join, end, and start types.

  - Set the line dotted-ness

- ### Brush (Modifications)

  - ~~The brush tool has a checkbox to make it use a stroke rather than fill.~~

    - Okay aparently this JUST got added to PenguinMod, so this works.

  - The brush tool will also have an option to enable merging. Which is on by default.

- ### Eraser (Modifications)

  - The eraser tool will have a checkbox to erase entire shapes.

- ### Fill (Modifications)

  - The paint bucket will see new options to create shapes by filling in by color or alpha rather than changing the color of an existing line or fill.

  - The default behavior will still exist obviously.

- ### Text (Modifications)

  - Fix the weird visual issues related to the alignment options.

  - Options to change the text spacing.

  - Options to change the text size in pixels.

  - Options to change the text weight (if the font supports it)

  - Add more fonts

- ### Line (Modifications)

  - The line tool will see the same modifications as the Reshape tool.

  - (although considering these affect all shapes, i may just make these global options.)

- ### Circle (Modifications)

  - The circle tool will have a number box to dictate how many points will make up the circle.

- ### Rectangle (Modifications)

  - The rectangle tool will be merged with the rounded rectangle tool. A roundness level of 0 will create a regular rectangle.

- ### Rounded Rectangle (Modifications)

  - The rounded rectangle tool will be merged with the rectangle tool. A roundness level of not 0 will create a rounded rectangle. The level of X axis roundness and Y axis roundness will be separated, they can be linked and will be by default.

- ### Triangle (Modifications)

  - Rename to “Polygon”

  - Options to make stars such as

    - Star dip

    - Curvature

  - Roundness options.

- ### Shapes (Modifications)

  - The user will be able to add their own shapes, assuming the target selection is made up of only one contiguous fill.

- ### Arrow (Modifications)

  - The arrow tool will see modifications for arrow thickness and style, allowing you to adjust both ends.

  - A bunch of arrow settings do actually exist but they are quite finicky, fine control would be preferable

- ### Gradient

  - This tool will allow you to adjust the points of any gradient, as well as make more complex gradients. This tool will work on strokes and fills depending on which is selected/what the shape contains.

- ### Image

  - This tool is for adjusting settings related to bitmap images.

- ### Lock/Unlock

  - A tool for quickly locking/unlocking shapes and groups.

- ### Pivot

  - This tool allows you to adjust the pivot point for shapes and groups and have it saved that way.

- ### Align

  - This tool allows you to align multiple shapes/groups in various ways, relative to the document, selection, etc.


## Todo and Contributing:

Thankfully, after several painful attempts, I managed to get the repo running, which means the project is in motion! 

Feel free to contribute! I don’t have any specific requirements to the project (Just don’t utterly ruin things.), just make pull requests and I’ll review them. Maybe if you keep it up I’ll invite you for direct repo access.

Without further ado, here is my painfully incomplete todo list, infrequently updated as I likely forget to:

- [x] ~~Get the damn thing running.~~

- [ ] Make mockups for desired features.

- [ ] Remove bitmap

- [ ] Circle

  - [x] ~~Points~~

  - [ ] Fix 3 and 2 Points

- [ ] Text

  - [ ] Fix missing add fonts button

  - [ ] Fix missing fonts.

- [ ] Organize The Repo to my preferences

- [ ] Prepare the repo for use with Electron

- [ ] Cleanup unnecessary packages/dependencies

- [ ] Merge addons

  - [ ] (dark mode plz my eyes)

- [ ] Icon/Logo

- [ ] Brush Tool

    - [x] ~~Brsuh Stroke Option (it was done for me in the form of the pen tool lol)~~

- [ ] The rest…..


## License and Credit:

Costume is licensed under the GNU General Public License version 3.0. See LICENSE for more information.

Costume is based on [PenguinMod/PenguinMod-Paint](https://github.com/PenguinMod/PenguinMod-Paint) which is in turn based on [Turbowarp/scratch-paint](https://github.com/TurboWarp/scratch-paint), Both projects share the same license.

The original scratch-paint that this is based on uses the following license:

```
Copyright (c) 2016, Massachusetts Institute of Technology

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

<!--
# scratch-paint
#### Scratch-paint provides a paint editor React component that takes and outputs SVGs or PNGs. It can convert between vector and bitmap modes.

[![Greenkeeper badge](https://badges.greenkeeper.io/LLK/scratch-paint.svg)](https://greenkeeper.io/)
- Try it out at [https://llk.github.io/scratch-paint/](https://llk.github.io/scratch-paint/)

- Or, to try it out as part of Scratch 3.0, visit [https://scratch.mit.edu/create](https://scratch.mit.edu/create) and click on the "Costumes" tab.

### Installation
It will be easiest if you develop on Mac or Linux. If you are using Windows, I recommend using Ubuntu on Windows, which will allow you to use Linux commands on Windows. You will need administrator permissions.

- https://docs.microsoft.com/en-us/windows/wsl/install-win10

Scratch Paint requires you to have Git and Node.js installed. E.g.:
```bash
- sudo apt-get update
- sudo apt-get install git-core
- sudo apt-get install nodejs
```

For Ubuntu on Windows, the Windows install of nodejs may interfere with the Linux one, so installing nodejs requires more steps:
```bash
- curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
- sudo apt-get install -y nodejs
- PATH="/usr/bin:$PATH"
```

If you want to edit scratch-paint, or help contribute to our open-source project, fork the [scratch-paint repo](https://github.com/LLK/scratch-paint). Then:
```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/scratch-paint.git
cd scratch-paint
npm install
```

### Running locally (stand-alone)
You can try out your own copy of the paint editor by running the development server.

In the cloned `scratch-paint` directory, run:
```bash
npm run build
npm start
```

Then go to [http://localhost:8078/playground/](http://localhost:8078/playground/). 8078 is BLOB upside-down. The True Name of this repo is scratch-blobs.

*(Note that the `npm run build` step above seems like it's only necessary for some user and environments, and not others; check for yourself if the server that `npm start` starts is hot-reloading correctly.)*

### Running locally (as part of Scratch)
So you've tried out your edits in the playground and they look good. You should now test with the rest of Scratch, to make sure that everything hooks up right, and so that you can use your custom paint editor to make costumes and sprites!

Get the rest of Scratch:
```bash
git clone https://github.com/LLK/scratch-gui.git
```
Go to your `scratch-paint` folder and run:
```bash
npm link
```

Now in another terminal, go back to the `scratch-gui` folder and run
```bash
npm install
npm link scratch-paint
npm start
```
Then go to [http://localhost:8601](http://localhost:8601). 601 is supposed to look like GUI (it's okay, I don't really see it either.) The Costumes tab should be running your local copy of scratch-paint!

### How to include in your own Node.js App
If you want to use scratch-paint in your own Node environment/application, add it with:
```bash
npm install --save scratch-paint
```

For an example of how to use scratch-paint as a library, check out the `scratch-paint/src/playground` directory.

In your parent component:
```
import PaintEditor from 'scratch-paint';
...
<PaintEditor
    image={optionalImage}
    imageId={optionalId}
    imageFormat='svg'
    rotationCenterX={optionalCenterPointX}
    rotationCenterY={optionalCenterPointY}
    rtl={true|false}
    onUpdateImage={handleUpdateImageFunction}
    zoomLevelId={optionalZoomLevelId}
/>
```

`image`: may either be nothing, an SVG string or a base64 data URI)
SVGs of up to size 480 x 360 will fit into the view window of the paint editor, while bitmaps of size up to 960 x 720 will fit into the paint editor. One unit of an SVG will appear twice as tall and wide as one unit of a bitmap. This quirky import behavior comes from needing to support legacy projects in Scratch.

`imageId`: If this parameter changes, then the paint editor will be cleared, the undo stack reset, and the image re-imported.

`imageFormat`: 'svg', 'png', or 'jpg'. Other formats are currently not supported.

`rotationCenterX`: x coordinate relative to the top left corner of the sprite of the point that should be centered. If left undefined, image will be horizontally centered.

`rotationCenterY`: y coordinate relative to the top left corner of the sprite of the point that should be centered. If left undefined, image will be vertcally centered.

`rtl`: True if the paint editor should be laid out right to left (meant for right to left languages)

`onUpdateImage`: A handler called with the new image (either an SVG string or an ImageData) each time the drawing is edited.

`zoomLevelId`: All costumes with the same zoom level ID will share the same saved zoom level. When a new zoom level ID is encountered, the paint editor will zoom to fit the current costume comfortably. Leave undefined to perform no zoom to fit.


In the top-level combineReducers function:
```
import {ScratchPaintReducer} from 'scratch-paint';
...
combineReducers({
	...
    scratchPaint: ScratchPaintReducer
});
```
Note that scratch-paint expects its state to be in `state.scratchPaint`, so the name must be exact.

Scratch-paint shares state with its parent component because it expects to share the parent's `IntlProvider`, which inserts translations into the state. See the `IntlProvider` setup in `scratch-gui` [here](https://github.com/LLK/scratch-gui/blob/f017ed72201bf63334dced161441ef6f154b1c74/src/lib/app-state-hoc.jsx).

### Code organization
We use React and Redux. If you're just getting started with them, here are some good tutorials:
[https://egghead.io/courses/getting-started-with-redux](https://egghead.io/courses/getting-started-with-redux)

- Under `/src`, our React/Redux code is divided mainly between `components` (presentational components), `containers` (container components), and `reducers`.

- `css` contains only shared css. Most of the css is stored alongside its component.

- `helper` contains pure javascript used by the containers. If you want to change how something works, it's probably here. For instance, the brush tool is in `helper/blob-tools/`, and the code that's run when you click the group button is in `helper/group.js`.

### Testing
```bash
npm run test
```

Just unit tests:
```bash
npm run unit
```

An individual unit test: (run from `scratch-paint` directory)
```bash
./node_modules/.bin/jest ./test/unit/undo-reducer.test.js
```

### Donate
We provide [Scratch](https://scratch.mit.edu) free of charge, and want to keep it that way! Please consider making a [donation](https://secure.donationpay.org/scratchfoundation/) to support our continued engineering, design, community, and resource development efforts. Donations of any size are appreciated. Thank you!

Scratch-paint couldn't exist without [w00dn/papergrapher](https://github.com/w00dn/papergrapher) and [Paper.js](https://github.com/paperjs/paper.js). If you are amazed and/or baffled by the insane boolean operation math that makes the brush and eraser tools possible, please check out and consider contributing to Paper. Thank you!
-->
