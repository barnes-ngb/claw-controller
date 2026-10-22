# Arm remote for the micro:bit Retro Arcade

Drives the ELECFREAKS robot arm (Wonder Building Kit, case 08) from the
Retro Arcade gamepad over radio.

1. **Arm:** put the arm program on the arm's micro:bit, unchanged:
   https://makecode.microbit.org/_544Vadd8sHJc (radio group 0).
2. **Arcade:** open https://arcade.makecode.com, choose **Import** then
   **Import URL**, paste https://github.com/barnes-ngb/claw-controller,
   then Download for the micro:bit Retro Arcade hardware and copy the file
   to the MICROBIT drive.

| Arcade button | Number sent | Arm does |
|---|---|---|
| Up / Down | 1 / 2 | claw servo (S0) steps one way / the other |
| Left / Right | 3 / 4 | motor M2 one way / the other |
| A / B | 5 / 6 | motor M1 one way / the other |
| nothing | 0 | stop |

This is a MakeCode **Arcade** project now. It no longer opens in the
micro:bit editor.


> Open this page at [https://barnes-ngb.github.io/claw-controller/](https://barnes-ngb.github.io/claw-controller/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/barnes-ngb/claw-controller** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/barnes-ngb/claw-controller** and click import

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
