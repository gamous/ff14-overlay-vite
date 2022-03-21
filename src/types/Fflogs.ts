export type FfIcon =
  | "NONE"
  | "Astrologian"
  | "Bard"
  | "BlackMage"
  | "DarkKnight"
  | "Dragoon"
  | "Machinist"
  | "Monk"
  | "Ninja"
  | "Paladin"
  | "Scholar"
  | "Summoner"
  | "Warrior"
  | "WhiteMage"
  | "RedMage"
  | "Samurai"
  | "Dancer"
  | "Gunbreaker"
  | "Reaper"
  | "Sage";

export function FfIconToName(fficon: FfIcon) {
  return (
    {
      "NONE": "NONE",
      "Astrologian": "AST",
      "Bard": "BRD",
      "BlackMage": "BLM",
      "DarkKnight": "DRK",
      "Dragoon": "DRG",
      "Machinist": "MCH",
      "Monk": "MNK",
      "Ninja": "NIN",
      "Paladin": "PLD",
      "Scholar": "SCH",
      "Summoner": "SMN",
      "Warrior": "WAR",
      "WhiteMage": "WHM",
      "RedMage": "RDM",
      "Samurai": "SAM",
      "Dancer": "DNC",
      "Gunbreaker": "GNB",
      "Reaper": "RPR",
      "Sage": "SGE",
    }[fficon] ?? "NONE"
  );
}
export type Friendlies = { guid: number; icon: string; id: number; name: string; server: string; fights: [{ id: number }] };

export type FflogsQuery = {
  code: string;
  fightIndex: number;
  start: number;
  end: number;
  friendlies: Friendlies[];
  abilityFilterEvents: { time: number; actionName: string; actionId: number; sourceIsFriendly: boolean,url:string }[];
  abilityFilterCandidate: { time: number; actionName: string; actionId: number; sourceIsFriendly: boolean; url: string }[];
  abilityFilterSelected: number[];
  abilityFilterEventsAfterFilterRawTimeline: string;
  zoneID: string;
  player: { fights?: [{ id: number }]; guid?: number; icon?: FfIcon; id?: number; name?: string; server?: string };
  bossIDs: number[];
};

export type FflogsApiV1ReportEvents = {
  ability: { name: string; guid: number; type: number; abilityIcon: string };
  fight: number;
  sourceID: number;
  sourceIsFriendly: boolean;
  sourceResources: {
    absorb: number;
    facing: number;
    hitPoints: number;
    maxHitPoints: number;
    mp: number;
    maxMP: number;
    tp: number;
    maxTP: number;
    x: number;
    y: number;
  };
  targetId: number;
  targetIsFriendly: boolean;
  targetResources: {
    facing: number;
    hitPoints: number;
    maxHitPoints: number;
    mp: number;
    maxMP: number;
    tp: number;
    maxTP: number;
    x: number;
    y: number;
  };
  timestamp: number;
  type: string;
};
