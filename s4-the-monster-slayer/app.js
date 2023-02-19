function getRandomValue(max, min){
  return min + Math.floor(Math.random() * (max - min));
}

const app = Vue.createApp({
  data(){
    return {
      monster: {
        health: 100,
        attack: {
          max: 20,
          min: 10,
        },
        specialAttackDamage: 20,
        heal: 33,
      },
      hero: {
        health: 100,
        maxHealth: 100,
        attack: {
          max: 12,
          min: 5,
        },
        specialAttack: {
          max: 25,
          min: 15,
        },
        heal: {
          max: 30,
          min: 20,
        },
      },
      currentRound: 0,
      battleResult: null,
      logMessages: [],
    };
  },
  computed: {
    monsterBarStyles(){ 
      if (this.monster.health < 0) {
        return {width: '0%'};
      }
      return {width: this.monster.health + '%'};
    },
    heroBarStyles(){
      if (this.hero.health < 0) {
        return {width: '0%'};
      }
      return {width: this.hero.health + '%'};
    },
    mayUseSpecialAttack(){
      return this.currentRound % 3;
    },
    mayUseHeal(){
      return this.currentRound % 4;
    },
  },
  watch: {
    'hero.health'(value) {
      if (value <= 0 && this.monster.health <= 0) {
        this.battleResult = 'draw';
      } else if (value <= 0) {
        this.battleResult = 'monster';
      }
    },
    'monster.health'(value) {
      if (value <= 0 && this.hero.health <= 0) {
        this.battleResult = 'draw';
      } else if (value <= 0) {
        this.battleResult = 'hero';
      }
    },
  },
  methods: {
    attackMonster(){
      this.currentRound++;
      const attackDamage = getRandomValue(this.hero.attack.max, this.hero.attack.min);
      this.monster.health -= attackDamage;
      this.addLogMessage('hero', 'attack', attackDamage);
      this.attackPlayer();
    },
    attackPlayer(){
      const attackDamage = getRandomValue(this.monster.attack.max, this.monster.attack.min);
      this.hero.health -= attackDamage;
      this.addLogMessage('monster', 'attack', attackDamage);
    },
    specialAttackMonster(){
      this.currentRound++;
      const attackDamage = getRandomValue(this.hero.specialAttack.max, this.hero.specialAttack.min);
      this.monster.health -= attackDamage;
      this.addLogMessage('hero', 'special attack', attackDamage);
      this.attackPlayer();

    },
    healHero(){
      this.currentRound++;
      const healAmount = getRandomValue(this.hero.heal.max, this.hero.heal.min);
      if (this.hero.health += healAmount > this.hero.maxHealth) {
        this.hero.health = this.hero.maxHealth;
      } else {
        this.hero.health += healAmount;
      }
      this.addLogMessage('hero', 'heal', healAmount);

      this.attackPlayer();
    },
    surrender(){
      this.battleResult = 'hero';
      this.addLogMessage('monster', 'attack', this.hero.health);
      this.hero.health = 0;
    },
    resetGame() {
      this.monster.health = 100;
      this.hero.health = 100;
      this.battleResult = null;
      this.logMessages = [];
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    }
  }
});

app.mount('#game');
