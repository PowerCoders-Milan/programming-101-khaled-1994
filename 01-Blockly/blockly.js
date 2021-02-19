//Insert level 9 code below
while (notDone()) {
    moveForward();
    if (isPathForward()) {
      turnLeft();
    } else {
      turnLeft();
    }
    if (isPathRight()) {
      turnRight();
    }
  }
  while (notDone()) {
    if (isPathLeft()) {
      turnLeft();
    }
    if (isPathForward()) {
      moveForward();
    } else {
      turnRight();
    }
  }