//* Wrong approach
// interface IPlayer {
//   walk() :void;
//   fight() : void;
//   loot() : void;

// }

// class Walk implements IPlayer {
//   walk(): void {
//     console.log("Player walking");
//   }
//   fight(): void {
//     console.log("Fight is disable");
//   }
//   loot(): void {
//     console.log("Loot is disable");
//   }

// }

// class Fight implements IPlayer {
//   walk(): void {
//     console.log("walk is disable");
//   }
//   fight(): void {
//     console.log("Player is in combat");
//   }
//   loot(): void {
//     console.log("Loot is disable");
//   }

// }


//* Correct approach
interface IPlayerWalk {
  walk(): void;
}
class Walk implements IPlayerWalk {
  walk(): void {
    console.log("Player is walking")
  }

}

interface IPlayerFight {
  fight(): void;
}
class Fight implements IPlayerFight {
  fight(): void {
    console.log("Player is fighting")
  }
}

interface IPlayerLoot {
  loot(): void;
}
class Loot implements IPlayerLoot {
  loot(): void {
    console.log("Player is looting")
  }
}