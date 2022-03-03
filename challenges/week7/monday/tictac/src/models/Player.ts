export class Player {
  constructor(private nickname: string) {}

  get playerNickname(): string {
    return this.nickname;
  }

  set setNickname(nick: string) {
    this.nickname = nick;
  }
}
