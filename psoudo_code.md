# Think about how to create the game.

## 1. Create the main page of the game (landing page).

### Tools and data of the game (start game)

- start button - link? button?

### Think about the advanced possibilities of the game.

## 2. create world layout

HTML - containers:

```
<body>
    <div class="main">
      <div class="world">

      </div>
      <div class="sideToolBar">
        <div class="tools">

        </div>
        <div class="inventory">

        </div>
      </div>
    </div>
  </body>
```

- fill the containers:

- game world

  1. sky tiles
  2. cloud tiles
  3. tree trunk tiles
  4. leaves tiles
  5. rock tiles
  6. dirt tiles

- side toolbar
  - tools
    1. Axe - for cutting trees
    2. Pickaxe - for mining rocks
    3. Shovel - for digging dirt
  - inventory

## 3. create the world

- create a grid x rows y cols
- create x\*y divs

  - each div in a grid in a (row,col) place
  - each div has data attributes:
    ```
    <div
      data-row:"i"
      data-row:"j"
      data-type:"
        0. sky tiles
        1. cloud tiles
        2. tree trunk tiles
        3. leaves tiles
        4. rock tiles
        5. dirt tiles
      ">
    ```

- how to create the original world?
  - basic: only sky[0] and dirt[5]
    - loop top of world add data type sky
    - loop bottom of world add data type dirt

```
<div class="col1">
  <h2>Pick a Tool</h2>
  <h2>collect Elements</h2>
  <h2>Place Elements on Empty Space</h2>
</div>
<div class="col2">
  <h2>Pick a Tool</h2>
  <h2>collect Elements</h2>
  <h2>Place Elements on Empty Space</h2>
</div>
<div class="col3">
  <h2>Pick a Tool</h2>
  <h2>collect Elements</h2>
  <h2>Place Elements on Empty Space</h2>
</div>
<div class="col4">
  <h2>Pick a Tool</h2>
  <h2>collect Elements</h2>
  <h2>Place Elements on Empty Space</h2>
</div>
```

## 4. Final editing of the game and testing of all functions.

## 5. Running the game(activating all functions and operations)
