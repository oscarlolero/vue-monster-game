new Vue({
    el: '#app',
    data: {
        started: true,
        monsterHealth: 100,
        playerHealth: 100,
        attacks: []
    },
    watch: {
        monsterHealth (value) {
            if(value <= 0) {
                alert('YOU WON!');
                this.giveUp();
            }
        },
        playerHealth (value) {
            if(value <= 0) {
                alert('YOU LOOSE!');
                this.giveUp();
            }
        },
    },
    methods: {
        attack () {
            const [dmgMonster, dmgPlayer] = [Math.floor(Math.random() * (10 - 15)) + 15, Math.floor(Math.random() * (10 - 15)) + 15];
            this.playerHealth -= dmgPlayer;
            this.monsterHealth -= dmgMonster;
            this.attacks.push({player: dmgPlayer, monster: dmgMonster});
        },
        specialAttack() {
            const [dmgMonster, dmgPlayer] = [Math.floor(Math.random() * (10 - 20)) + 20, Math.floor(Math.random() * (10 - 20)) + 20];
            this.playerHealth -= dmgPlayer;
            this.monsterHealth -= dmgMonster;
            this.attacks.push({player: dmgPlayer, monster: dmgMonster});
        },
        heal () {
            this.playerHealth += Math.floor(Math.random() * (10 - 15)) + 15;
        },
        getAttackInfo (attackInfo, key) {
            const damagers = ['PLAYER', 'MONSTER'];
            return `${key.toUpperCase()} ATTACKS ${damagers[0] === key.toUpperCase() ? 'MONSTER' : 'PLAYER'} FOR ${attackInfo}`;
        },
        giveUp () {
            this.attacks = [];
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.started = false;
        }
    }
});