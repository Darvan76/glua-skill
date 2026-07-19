# Enums


---

## `_USE` `[client/server]`

---

Enumerations used by Entity:SetUseType. Affects when ENTITY:Use is triggered.

Not to be confused with Enums/USE used for ENTITY:Use and others.

---

- `CONTINUOUS_USE` = `0` — Fire a Enums/USE signal every tick as long as the player holds their use key and aims at the target.

---

- `ONOFF_USE` = `1` — Fires a Enums/USE signal when starting to use an entity, and a Enums/USE signal when letting go.

There is no guarantee to receive both ON and OFF signals. A signal will only be sent when pushing or letting go of the use key while actually aiming at the entity, so an ON signal might not be followed by an OFF signal if the player is aiming somewhere else when releasing the key, and similarly, an OFF signal may not be preceded by an ON signal if the player started aiming at the entity only after pressing the key.

Therefore, this method of input is unreliable and should not be used.

---

- `DIRECTIONAL_USE` = `2` — Like a wheel turning.

---

- `SIMPLE_USE` = `3` — Fire a Enums/USE signal only once when player presses their use key while aiming at the target.

---

## `ACT` `[client/server]`

---

Enumerations used by functions like Weapon:SendWeaponAnim &amp; Entity:SelectWeightedSequence.

An activity is a code-friendly identifier for an animation, and can point to multiple sequences (animations) depending on the model.

See [$sequence](https://developer.valvesoftware.com/wiki/$sequence) `.qc` command documentation on Valve Developer Wiki, specifically the `activity` parameter.

---

- `ACT_INVALID` = `-1` — 

---

- `ACT_RESET` = `0` — 

---

- `ACT_IDLE` = `1` — 

---

- `ACT_TRANSITION` = `2` — 

---

- `ACT_COVER` = `3` — 

---

- `ACT_COVER_MED` = `4` — 

---

- `ACT_COVER_LOW` = `5` — 

---

- `ACT_WALK` = `6` — 

---

- `ACT_WALK_AIM` = `7` — 

---

- `ACT_WALK_CROUCH` = `8` — 

---

- `ACT_WALK_CROUCH_AIM` = `9` — 

---

- `ACT_RUN` = `10` — 

---

- `ACT_RUN_AIM` = `11` — 

---

- `ACT_RUN_CROUCH` = `12` — 

---

- `ACT_RUN_CROUCH_AIM` = `13` — 

---

- `ACT_RUN_PROTECTED` = `14` — 

---

- `ACT_SCRIPT_CUSTOM_MOVE` = `15` — 

---

- `ACT_RANGE_ATTACK1` = `16` — 

---

- `ACT_RANGE_ATTACK2` = `17` — 

---

- `ACT_RANGE_ATTACK1_LOW` = `18` — 

---

- `ACT_RANGE_ATTACK2_LOW` = `19` — 

---

- `ACT_DIESIMPLE` = `20` — 

---

- `ACT_DIEBACKWARD` = `21` — 

---

- `ACT_DIEFORWARD` = `22` — 

---

- `ACT_DIEVIOLENT` = `23` — 

---

- `ACT_DIERAGDOLL` = `24` — 

---

- `ACT_FLY` = `25` — 

---

- `ACT_HOVER` = `26` — 

---

- `ACT_GLIDE` = `27` — 

---

- `ACT_SWIM` = `28` — 

---

- `ACT_SWIM_IDLE` = `29` — 

---

- `ACT_JUMP` = `30` — 

---

- `ACT_HOP` = `31` — 

---

- `ACT_LEAP` = `32` — 

---

- `ACT_LAND` = `33` — 

---

- `ACT_CLIMB_UP` = `34` — 

---

- `ACT_CLIMB_DOWN` = `35` — 

---

- `ACT_CLIMB_DISMOUNT` = `36` — 

---

- `ACT_SHIPLADDER_UP` = `37` — 

---

- `ACT_SHIPLADDER_DOWN` = `38` — 

---

- `ACT_STRAFE_LEFT` = `39` — 

---

- `ACT_STRAFE_RIGHT` = `40` — 

---

- `ACT_ROLL_LEFT` = `41` — 

---

- `ACT_ROLL_RIGHT` = `42` — 

---

- `ACT_TURN_LEFT` = `43` — 

---

- `ACT_TURN_RIGHT` = `44` — 

---

- `ACT_CROUCH` = `45` — 

---

- `ACT_CROUCHIDLE` = `46` — 

---

- `ACT_STAND` = `47` — 

---

- `ACT_USE` = `48` — 

---

- `ACT_SIGNAL1` = `49` — 

---

- `ACT_SIGNAL2` = `50` — 

---

- `ACT_SIGNAL3` = `51` — 

---

- `ACT_SIGNAL_ADVANCE` = `52` — 

---

- `ACT_SIGNAL_FORWARD` = `53` — 

---

- `ACT_SIGNAL_GROUP` = `54` — 

---

- `ACT_SIGNAL_HALT` = `55` — 

---

- `ACT_SIGNAL_LEFT` = `56` — 

---

- `ACT_SIGNAL_RIGHT` = `57` — 

---

- `ACT_SIGNAL_TAKECOVER` = `58` — 

---

- `ACT_LOOKBACK_RIGHT` = `59` — 

---

- `ACT_LOOKBACK_LEFT` = `60` — 

---

- `ACT_COWER` = `61` — 

---

- `ACT_SMALL_FLINCH` = `62` — 

---

- `ACT_BIG_FLINCH` = `63` — 

---

- `ACT_MELEE_ATTACK1` = `64` — 

---

- `ACT_MELEE_ATTACK2` = `65` — 

---

- `ACT_RELOAD` = `66` — 

---

- `ACT_RELOAD_START` = `67` — 

---

- `ACT_RELOAD_FINISH` = `68` — 

---

- `ACT_RELOAD_LOW` = `69` — 

---

- `ACT_ARM` = `70` — 

---

- `ACT_DISARM` = `71` — 

---

- `ACT_DROP_WEAPON` = `72` — 

---

- `ACT_DROP_WEAPON_SHOTGUN` = `73` — 

---

- `ACT_PICKUP_GROUND` = `74` — 

---

- `ACT_PICKUP_RACK` = `75` — 

---

- `ACT_IDLE_ANGRY` = `76` — 

---

- `ACT_IDLE_RELAXED` = `77` — 

---

- `ACT_IDLE_STIMULATED` = `78` — 

---

- `ACT_IDLE_AGITATED` = `79` — 

---

- `ACT_IDLE_STEALTH` = `80` — 

---

- `ACT_IDLE_HURT` = `81` — 

---

- `ACT_WALK_RELAXED` = `82` — 

---

- `ACT_WALK_STIMULATED` = `83` — 

---

- `ACT_WALK_AGITATED` = `84` — 

---

- `ACT_WALK_STEALTH` = `85` — 

---

- `ACT_RUN_RELAXED` = `86` — 

---

- `ACT_RUN_STIMULATED` = `87` — 

---

- `ACT_RUN_AGITATED` = `88` — 

---

- `ACT_RUN_STEALTH` = `89` — 

---

- `ACT_IDLE_AIM_RELAXED` = `90` — 

---

- `ACT_IDLE_AIM_STIMULATED` = `91` — 

---

- `ACT_IDLE_AIM_AGITATED` = `92` — 

---

- `ACT_IDLE_AIM_STEALTH` = `93` — 

---

- `ACT_WALK_AIM_RELAXED` = `94` — 

---

- `ACT_WALK_AIM_STIMULATED` = `95` — 

---

- `ACT_WALK_AIM_AGITATED` = `96` — 

---

- `ACT_WALK_AIM_STEALTH` = `97` — 

---

- `ACT_RUN_AIM_RELAXED` = `98` — 

---

- `ACT_RUN_AIM_STIMULATED` = `99` — 

---

- `ACT_RUN_AIM_AGITATED` = `100` — 

---

- `ACT_RUN_AIM_STEALTH` = `101` — 

---

- `ACT_CROUCHIDLE_STIMULATED` = `102` — 

---

- `ACT_CROUCHIDLE_AIM_STIMULATED` = `103` — 

---

- `ACT_CROUCHIDLE_AGITATED` = `104` — 

---

- `ACT_WALK_HURT` = `105` — 

---

- `ACT_RUN_HURT` = `106` — 

---

- `ACT_SPECIAL_ATTACK1` = `107` — 

---

- `ACT_SPECIAL_ATTACK2` = `108` — 

---

- `ACT_COMBAT_IDLE` = `109` — 

---

- `ACT_WALK_SCARED` = `110` — 

---

- `ACT_RUN_SCARED` = `111` — 

---

- `ACT_VICTORY_DANCE` = `112` — 

---

- `ACT_DIE_HEADSHOT` = `113` — 

---

- `ACT_DIE_CHESTSHOT` = `114` — 

---

- `ACT_DIE_GUTSHOT` = `115` — 

---

- `ACT_DIE_BACKSHOT` = `116` — 

---

- `ACT_FLINCH_HEAD` = `117` — 

---

- `ACT_FLINCH_CHEST` = `118` — 

---

- `ACT_FLINCH_STOMACH` = `119` — 

---

- `ACT_FLINCH_LEFTARM` = `120` — 

---

- `ACT_FLINCH_RIGHTARM` = `121` — 

---

- `ACT_FLINCH_LEFTLEG` = `122` — 

---

- `ACT_FLINCH_RIGHTLEG` = `123` — 

---

- `ACT_FLINCH_PHYSICS` = `124` — 

---

- `ACT_IDLE_ON_FIRE` = `125` — 

---

- `ACT_WALK_ON_FIRE` = `126` — 

---

- `ACT_RUN_ON_FIRE` = `127` — 

---

- `ACT_RAPPEL_LOOP` = `128` — 

---

- `ACT_180_LEFT` = `129` — 

---

- `ACT_180_RIGHT` = `130` — 

---

- `ACT_90_LEFT` = `131` — 

---

- `ACT_90_RIGHT` = `132` — 

---

- `ACT_STEP_LEFT` = `133` — 

---

- `ACT_STEP_RIGHT` = `134` — 

---

- `ACT_STEP_BACK` = `135` — 

---

- `ACT_STEP_FORE` = `136` — 

---

- `ACT_GESTURE_RANGE_ATTACK1` = `137` — 

---

- `ACT_GESTURE_RANGE_ATTACK2` = `138` — 

---

- `ACT_GESTURE_MELEE_ATTACK1` = `139` — 

---

- `ACT_GESTURE_MELEE_ATTACK2` = `140` — 

---

- `ACT_GESTURE_RANGE_ATTACK1_LOW` = `141` — 

---

- `ACT_GESTURE_RANGE_ATTACK2_LOW` = `142` — 

---

- `ACT_MELEE_ATTACK_SWING_GESTURE` = `143` — 

---

- `ACT_GESTURE_SMALL_FLINCH` = `144` — 

---

- `ACT_GESTURE_BIG_FLINCH` = `145` — 

---

- `ACT_GESTURE_FLINCH_BLAST` = `146` — 

---

- `ACT_GESTURE_FLINCH_BLAST_SHOTGUN` = `147` — 

---

- `ACT_GESTURE_FLINCH_BLAST_DAMAGED` = `148` — 

---

- `ACT_GESTURE_FLINCH_BLAST_DAMAGED_SHOTGUN` = `149` — 

---

- `ACT_GESTURE_FLINCH_HEAD` = `150` — 

---

- `ACT_GESTURE_FLINCH_CHEST` = `151` — 

---

- `ACT_GESTURE_FLINCH_STOMACH` = `152` — 

---

- `ACT_GESTURE_FLINCH_LEFTARM` = `153` — 

---

- `ACT_GESTURE_FLINCH_RIGHTARM` = `154` — 

---

- `ACT_GESTURE_FLINCH_LEFTLEG` = `155` — 

---

- `ACT_GESTURE_FLINCH_RIGHTLEG` = `156` — 

---

- `ACT_GESTURE_TURN_LEFT` = `157` — 

---

- `ACT_GESTURE_TURN_RIGHT` = `158` — 

---

- `ACT_GESTURE_TURN_LEFT45` = `159` — 

---

- `ACT_GESTURE_TURN_RIGHT45` = `160` — 

---

- `ACT_GESTURE_TURN_LEFT90` = `161` — 

---

- `ACT_GESTURE_TURN_RIGHT90` = `162` — 

---

- `ACT_GESTURE_TURN_LEFT45_FLAT` = `163` — 

---

- `ACT_GESTURE_TURN_RIGHT45_FLAT` = `164` — 

---

- `ACT_GESTURE_TURN_LEFT90_FLAT` = `165` — 

---

- `ACT_GESTURE_TURN_RIGHT90_FLAT` = `166` — 

---

- `ACT_BARNACLE_HIT` = `167` — 

---

- `ACT_BARNACLE_PULL` = `168` — 

---

- `ACT_BARNACLE_CHOMP` = `169` — 

---

- `ACT_BARNACLE_CHEW` = `170` — 

---

- `ACT_DO_NOT_DISTURB` = `171` — 

---

- `ACT_VM_DRAW` = `172` — 

---

- `ACT_VM_HOLSTER` = `173` — 

---

- `ACT_VM_IDLE` = `174` — 

---

- `ACT_VM_FIDGET` = `175` — 

---

- `ACT_VM_PULLBACK` = `176` — 

---

- `ACT_VM_PULLBACK_HIGH` = `177` — 

---

- `ACT_VM_PULLBACK_LOW` = `178` — 

---

- `ACT_VM_THROW` = `179` — 

---

- `ACT_VM_PULLPIN` = `180` — 

---

- `ACT_VM_PRIMARYATTACK` = `181` — 

---

- `ACT_VM_SECONDARYATTACK` = `182` — 

---

- `ACT_VM_RELOAD` = `183` — 

---

- `ACT_VM_DRYFIRE` = `186` — 

---

- `ACT_VM_HITLEFT` = `187` — 

---

- `ACT_VM_HITLEFT2` = `188` — 

---

- `ACT_VM_HITRIGHT` = `189` — 

---

- `ACT_VM_HITRIGHT2` = `190` — 

---

- `ACT_VM_HITCENTER` = `191` — 

---

- `ACT_VM_HITCENTER2` = `192` — 

---

- `ACT_VM_MISSLEFT` = `193` — 

---

- `ACT_VM_MISSLEFT2` = `194` — 

---

- `ACT_VM_MISSRIGHT` = `195` — 

---

- `ACT_VM_MISSRIGHT2` = `196` — 

---

- `ACT_VM_MISSCENTER` = `197` — 

---

- `ACT_VM_MISSCENTER2` = `198` — 

---

- `ACT_VM_HAULBACK` = `199` — 

---

- `ACT_VM_SWINGHARD` = `200` — 

---

- `ACT_VM_SWINGMISS` = `201` — 

---

- `ACT_VM_SWINGHIT` = `202` — 

---

- `ACT_VM_IDLE_TO_LOWERED` = `203` — 

---

- `ACT_VM_IDLE_LOWERED` = `204` — 

---

- `ACT_VM_LOWERED_TO_IDLE` = `205` — 

---

- `ACT_VM_RECOIL1` = `206` — 

---

- `ACT_VM_RECOIL2` = `207` — 

---

- `ACT_VM_RECOIL3` = `208` — 

---

- `ACT_VM_PICKUP` = `209` — 

---

- `ACT_VM_RELEASE` = `210` — 

---

- `ACT_VM_ATTACH_SILENCER` = `211` — 

---

- `ACT_VM_DETACH_SILENCER` = `212` — 

---

- `ACT_SLAM_STICKWALL_IDLE` = `229` — 

---

- `ACT_SLAM_STICKWALL_ND_IDLE` = `230` — 

---

- `ACT_SLAM_STICKWALL_ATTACH` = `231` — 

---

- `ACT_SLAM_STICKWALL_ATTACH2` = `232` — 

---

- `ACT_SLAM_STICKWALL_ND_ATTACH` = `233` — 

---

- `ACT_SLAM_STICKWALL_ND_ATTACH2` = `234` — 

---

- `ACT_SLAM_STICKWALL_DETONATE` = `235` — 

---

- `ACT_SLAM_STICKWALL_DETONATOR_HOLSTER` = `236` — 

---

- `ACT_SLAM_STICKWALL_DRAW` = `237` — 

---

- `ACT_SLAM_STICKWALL_ND_DRAW` = `238` — 

---

- `ACT_SLAM_STICKWALL_TO_THROW` = `239` — 

---

- `ACT_SLAM_STICKWALL_TO_THROW_ND` = `240` — 

---

- `ACT_SLAM_STICKWALL_TO_TRIPMINE_ND` = `241` — 

---

- `ACT_SLAM_THROW_IDLE` = `242` — 

---

- `ACT_SLAM_THROW_ND_IDLE` = `243` — 

---

- `ACT_SLAM_THROW_THROW` = `244` — 

---

- `ACT_SLAM_THROW_THROW2` = `245` — 

---

- `ACT_SLAM_THROW_THROW_ND` = `246` — 

---

- `ACT_SLAM_THROW_THROW_ND2` = `247` — 

---

- `ACT_SLAM_THROW_DRAW` = `248` — 

---

- `ACT_SLAM_THROW_ND_DRAW` = `249` — 

---

- `ACT_SLAM_THROW_TO_STICKWALL` = `250` — 

---

- `ACT_SLAM_THROW_TO_STICKWALL_ND` = `251` — 

---

- `ACT_SLAM_THROW_DETONATE` = `252` — 

---

- `ACT_SLAM_THROW_DETONATOR_HOLSTER` = `253` — 

---

- `ACT_SLAM_THROW_TO_TRIPMINE_ND` = `254` — 

---

- `ACT_SLAM_TRIPMINE_IDLE` = `255` — 

---

- `ACT_SLAM_TRIPMINE_DRAW` = `256` — 

---

- `ACT_SLAM_TRIPMINE_ATTACH` = `257` — 

---

- `ACT_SLAM_TRIPMINE_ATTACH2` = `258` — 

---

- `ACT_SLAM_TRIPMINE_TO_STICKWALL_ND` = `259` — 

---

- `ACT_SLAM_TRIPMINE_TO_THROW_ND` = `260` — 

---

- `ACT_SLAM_DETONATOR_IDLE` = `261` — 

---

- `ACT_SLAM_DETONATOR_DRAW` = `262` — 

---

- `ACT_SLAM_DETONATOR_DETONATE` = `263` — 

---

- `ACT_SLAM_DETONATOR_HOLSTER` = `264` — 

---

- `ACT_SLAM_DETONATOR_STICKWALL_DRAW` = `265` — 

---

- `ACT_SLAM_DETONATOR_THROW_DRAW` = `266` — 

---

- `ACT_SHOTGUN_RELOAD_START` = `267` — 

---

- `ACT_SHOTGUN_RELOAD_FINISH` = `268` — 

---

- `ACT_SHOTGUN_PUMP` = `269` — 

---

- `ACT_SMG2_IDLE2` = `270` — 

---

- `ACT_SMG2_FIRE2` = `271` — 

---

- `ACT_SMG2_DRAW2` = `272` — 

---

- `ACT_SMG2_RELOAD2` = `273` — 

---

- `ACT_SMG2_DRYFIRE2` = `274` — 

---

- `ACT_SMG2_TOAUTO` = `275` — 

---

- `ACT_SMG2_TOBURST` = `276` — 

---

- `ACT_PHYSCANNON_UPGRADE` = `277` — 

---

- `ACT_RANGE_ATTACK_AR1` = `278` — 

---

- `ACT_RANGE_ATTACK_AR2` = `279` — 

---

- `ACT_RANGE_ATTACK_AR2_LOW` = `280` — 

---

- `ACT_RANGE_ATTACK_AR2_GRENADE` = `281` — 

---

- `ACT_RANGE_ATTACK_HMG1` = `282` — 

---

- `ACT_RANGE_ATTACK_ML` = `283` — 

---

- `ACT_RANGE_ATTACK_SMG1` = `284` — 

---

- `ACT_RANGE_ATTACK_SMG1_LOW` = `285` — 

---

- `ACT_RANGE_ATTACK_SMG2` = `286` — 

---

- `ACT_RANGE_ATTACK_SHOTGUN` = `287` — 

---

- `ACT_RANGE_ATTACK_SHOTGUN_LOW` = `288` — 

---

- `ACT_RANGE_ATTACK_PISTOL` = `289` — 

---

- `ACT_RANGE_ATTACK_PISTOL_LOW` = `290` — 

---

- `ACT_RANGE_ATTACK_SLAM` = `291` — 

---

- `ACT_RANGE_ATTACK_TRIPWIRE` = `292` — 

---

- `ACT_RANGE_ATTACK_THROW` = `293` — 

---

- `ACT_RANGE_ATTACK_SNIPER_RIFLE` = `294` — 

---

- `ACT_RANGE_ATTACK_RPG` = `295` — 

---

- `ACT_MELEE_ATTACK_SWING` = `296` — 

---

- `ACT_RANGE_AIM_LOW` = `297` — 

---

- `ACT_RANGE_AIM_SMG1_LOW` = `298` — 

---

- `ACT_RANGE_AIM_PISTOL_LOW` = `299` — 

---

- `ACT_RANGE_AIM_AR2_LOW` = `300` — 

---

- `ACT_COVER_PISTOL_LOW` = `301` — 

---

- `ACT_COVER_SMG1_LOW` = `302` — 

---

- `ACT_GESTURE_RANGE_ATTACK_AR1` = `303` — 

---

- `ACT_GESTURE_RANGE_ATTACK_AR2` = `304` — 

---

- `ACT_GESTURE_RANGE_ATTACK_AR2_GRENADE` = `305` — 

---

- `ACT_GESTURE_RANGE_ATTACK_HMG1` = `306` — 

---

- `ACT_GESTURE_RANGE_ATTACK_ML` = `307` — 

---

- `ACT_GESTURE_RANGE_ATTACK_SMG1` = `308` — 

---

- `ACT_GESTURE_RANGE_ATTACK_SMG1_LOW` = `309` — 

---

- `ACT_GESTURE_RANGE_ATTACK_SMG2` = `310` — 

---

- `ACT_GESTURE_RANGE_ATTACK_SHOTGUN` = `311` — 

---

- `ACT_GESTURE_RANGE_ATTACK_PISTOL` = `312` — 

---

- `ACT_GESTURE_RANGE_ATTACK_PISTOL_LOW` = `313` — 

---

- `ACT_GESTURE_RANGE_ATTACK_SLAM` = `314` — 

---

- `ACT_GESTURE_RANGE_ATTACK_TRIPWIRE` = `315` — 

---

- `ACT_GESTURE_RANGE_ATTACK_THROW` = `316` — 

---

- `ACT_GESTURE_RANGE_ATTACK_SNIPER_RIFLE` = `317` — 

---

- `ACT_GESTURE_MELEE_ATTACK_SWING` = `318` — 

---

- `ACT_IDLE_RIFLE` = `319` — 

---

- `ACT_IDLE_SMG1` = `320` — 

---

- `ACT_IDLE_ANGRY_SMG1` = `321` — 

---

- `ACT_IDLE_PISTOL` = `322` — 

---

- `ACT_IDLE_ANGRY_PISTOL` = `323` — 

---

- `ACT_IDLE_ANGRY_SHOTGUN` = `324` — 

---

- `ACT_IDLE_STEALTH_PISTOL` = `325` — 

---

- `ACT_IDLE_PACKAGE` = `326` — 

---

- `ACT_WALK_PACKAGE` = `327` — 

---

- `ACT_IDLE_SUITCASE` = `328` — 

---

- `ACT_WALK_SUITCASE` = `329` — 

---

- `ACT_IDLE_SMG1_RELAXED` = `330` — 

---

- `ACT_IDLE_SMG1_STIMULATED` = `331` — 

---

- `ACT_WALK_RIFLE_RELAXED` = `332` — 

---

- `ACT_RUN_RIFLE_RELAXED` = `333` — 

---

- `ACT_WALK_RIFLE_STIMULATED` = `334` — 

---

- `ACT_RUN_RIFLE_STIMULATED` = `335` — 

---

- `ACT_IDLE_AIM_RIFLE_STIMULATED` = `336` — 

---

- `ACT_WALK_AIM_RIFLE_STIMULATED` = `337` — 

---

- `ACT_RUN_AIM_RIFLE_STIMULATED` = `338` — 

---

- `ACT_IDLE_SHOTGUN_RELAXED` = `339` — 

---

- `ACT_IDLE_SHOTGUN_STIMULATED` = `340` — 

---

- `ACT_IDLE_SHOTGUN_AGITATED` = `341` — 

---

- `ACT_WALK_ANGRY` = `342` — 

---

- `ACT_POLICE_HARASS1` = `343` — 

---

- `ACT_POLICE_HARASS2` = `344` — 

---

- `ACT_IDLE_MANNEDGUN` = `345` — 

---

- `ACT_IDLE_MELEE` = `346` — 

---

- `ACT_IDLE_ANGRY_MELEE` = `347` — 

---

- `ACT_IDLE_RPG_RELAXED` = `348` — 

---

- `ACT_IDLE_RPG` = `349` — 

---

- `ACT_IDLE_ANGRY_RPG` = `350` — 

---

- `ACT_COVER_LOW_RPG` = `351` — 

---

- `ACT_WALK_RPG` = `352` — 

---

- `ACT_RUN_RPG` = `353` — 

---

- `ACT_WALK_CROUCH_RPG` = `354` — 

---

- `ACT_RUN_CROUCH_RPG` = `355` — 

---

- `ACT_WALK_RPG_RELAXED` = `356` — 

---

- `ACT_RUN_RPG_RELAXED` = `357` — 

---

- `ACT_WALK_RIFLE` = `358` — 

---

- `ACT_WALK_AIM_RIFLE` = `359` — 

---

- `ACT_WALK_CROUCH_RIFLE` = `360` — 

---

- `ACT_WALK_CROUCH_AIM_RIFLE` = `361` — 

---

- `ACT_RUN_RIFLE` = `362` — 

---

- `ACT_RUN_AIM_RIFLE` = `363` — 

---

- `ACT_RUN_CROUCH_RIFLE` = `364` — 

---

- `ACT_RUN_CROUCH_AIM_RIFLE` = `365` — 

---

- `ACT_RUN_STEALTH_PISTOL` = `366` — 

---

- `ACT_WALK_AIM_SHOTGUN` = `367` — 

---

- `ACT_RUN_AIM_SHOTGUN` = `368` — 

---

- `ACT_WALK_PISTOL` = `369` — 

---

- `ACT_RUN_PISTOL` = `370` — 

---

- `ACT_WALK_AIM_PISTOL` = `371` — 

---

- `ACT_RUN_AIM_PISTOL` = `372` — 

---

- `ACT_WALK_STEALTH_PISTOL` = `373` — 

---

- `ACT_WALK_AIM_STEALTH_PISTOL` = `374` — 

---

- `ACT_RUN_AIM_STEALTH_PISTOL` = `375` — 

---

- `ACT_RELOAD_PISTOL` = `376` — 

---

- `ACT_RELOAD_PISTOL_LOW` = `377` — 

---

- `ACT_RELOAD_SMG1` = `378` — 

---

- `ACT_RELOAD_SMG1_LOW` = `379` — 

---

- `ACT_RELOAD_SHOTGUN` = `380` — 

---

- `ACT_RELOAD_SHOTGUN_LOW` = `381` — 

---

- `ACT_GESTURE_RELOAD` = `382` — 

---

- `ACT_GESTURE_RELOAD_PISTOL` = `383` — 

---

- `ACT_GESTURE_RELOAD_SMG1` = `384` — 

---

- `ACT_GESTURE_RELOAD_SHOTGUN` = `385` — 

---

- `ACT_BUSY_LEAN_LEFT` = `386` — 

---

- `ACT_BUSY_LEAN_LEFT_ENTRY` = `387` — 

---

- `ACT_BUSY_LEAN_LEFT_EXIT` = `388` — 

---

- `ACT_BUSY_LEAN_BACK` = `389` — 

---

- `ACT_BUSY_LEAN_BACK_ENTRY` = `390` — 

---

- `ACT_BUSY_LEAN_BACK_EXIT` = `391` — 

---

- `ACT_BUSY_SIT_GROUND` = `392` — 

---

- `ACT_BUSY_SIT_GROUND_ENTRY` = `393` — 

---

- `ACT_BUSY_SIT_GROUND_EXIT` = `394` — 

---

- `ACT_BUSY_SIT_CHAIR` = `395` — 

---

- `ACT_BUSY_SIT_CHAIR_ENTRY` = `396` — 

---

- `ACT_BUSY_SIT_CHAIR_EXIT` = `397` — 

---

- `ACT_BUSY_STAND` = `398` — 

---

- `ACT_BUSY_QUEUE` = `399` — 

---

- `ACT_DUCK_DODGE` = `400` — 

---

- `ACT_DIE_BARNACLE_SWALLOW` = `401` — 

---

- `ACT_GESTURE_BARNACLE_STRANGLE` = `402` — 

---

- `ACT_PHYSCANNON_DETACH` = `403` — 

---

- `ACT_PHYSCANNON_ANIMATE` = `404` — 

---

- `ACT_PHYSCANNON_ANIMATE_PRE` = `405` — 

---

- `ACT_PHYSCANNON_ANIMATE_POST` = `406` — 

---

- `ACT_DIE_FRONTSIDE` = `407` — 

---

- `ACT_DIE_RIGHTSIDE` = `408` — 

---

- `ACT_DIE_BACKSIDE` = `409` — 

---

- `ACT_DIE_LEFTSIDE` = `410` — 

---

- `ACT_OPEN_DOOR` = `411` — 

---

- `ACT_DI_ALYX_ZOMBIE_MELEE` = `412` — 

---

- `ACT_DI_ALYX_ZOMBIE_TORSO_MELEE` = `413` — 

---

- `ACT_DI_ALYX_HEADCRAB_MELEE` = `414` — 

---

- `ACT_DI_ALYX_ANTLION` = `415` — 

---

- `ACT_DI_ALYX_ZOMBIE_SHOTGUN64` = `416` — 

---

- `ACT_DI_ALYX_ZOMBIE_SHOTGUN26` = `417` — 

---

- `ACT_READINESS_RELAXED_TO_STIMULATED` = `418` — 

---

- `ACT_READINESS_RELAXED_TO_STIMULATED_WALK` = `419` — 

---

- `ACT_READINESS_AGITATED_TO_STIMULATED` = `420` — 

---

- `ACT_READINESS_STIMULATED_TO_RELAXED` = `421` — 

---

- `ACT_READINESS_PISTOL_RELAXED_TO_STIMULATED` = `422` — 

---

- `ACT_READINESS_PISTOL_RELAXED_TO_STIMULATED_WALK` = `423` — 

---

- `ACT_READINESS_PISTOL_AGITATED_TO_STIMULATED` = `424` — 

---

- `ACT_READINESS_PISTOL_STIMULATED_TO_RELAXED` = `425` — 

---

- `ACT_IDLE_CARRY` = `426` — 

---

- `ACT_WALK_CARRY` = `427` — 

---

- `ACT_STARTDYING` = `428` — 

---

- `ACT_DYINGLOOP` = `429` — 

---

- `ACT_DYINGTODEAD` = `430` — 

---

- `ACT_RIDE_MANNED_GUN` = `431` — 

---

- `ACT_VM_SPRINT_ENTER` = `432` — 

---

- `ACT_VM_SPRINT_IDLE` = `433` — 

---

- `ACT_VM_SPRINT_LEAVE` = `434` — 

---

- `ACT_FIRE_START` = `435` — 

---

- `ACT_FIRE_LOOP` = `436` — 

---

- `ACT_FIRE_END` = `437` — 

---

- `ACT_CROUCHING_GRENADEIDLE` = `438` — 

---

- `ACT_CROUCHING_GRENADEREADY` = `439` — 

---

- `ACT_CROUCHING_PRIMARYATTACK` = `440` — 

---

- `ACT_OVERLAY_GRENADEIDLE` = `441` — 

---

- `ACT_OVERLAY_GRENADEREADY` = `442` — 

---

- `ACT_OVERLAY_PRIMARYATTACK` = `443` — 

---

- `ACT_OVERLAY_SHIELD_UP` = `444` — 

---

- `ACT_OVERLAY_SHIELD_DOWN` = `445` — 

---

- `ACT_OVERLAY_SHIELD_UP_IDLE` = `446` — 

---

- `ACT_OVERLAY_SHIELD_ATTACK` = `447` — 

---

- `ACT_OVERLAY_SHIELD_KNOCKBACK` = `448` — 

---

- `ACT_SHIELD_UP` = `449` — 

---

- `ACT_SHIELD_DOWN` = `450` — 

---

- `ACT_SHIELD_UP_IDLE` = `451` — 

---

- `ACT_SHIELD_ATTACK` = `452` — 

---

- `ACT_SHIELD_KNOCKBACK` = `453` — 

---

- `ACT_CROUCHING_SHIELD_UP` = `454` — 

---

- `ACT_CROUCHING_SHIELD_DOWN` = `455` — 

---

- `ACT_CROUCHING_SHIELD_UP_IDLE` = `456` — 

---

- `ACT_CROUCHING_SHIELD_ATTACK` = `457` — 

---

- `ACT_CROUCHING_SHIELD_KNOCKBACK` = `458` — 

---

- `ACT_TURNRIGHT45` = `459` — 

---

- `ACT_TURNLEFT45` = `460` — 

---

- `ACT_TURN` = `461` — 

---

- `ACT_OBJ_ASSEMBLING` = `462` — 

---

- `ACT_OBJ_DISMANTLING` = `463` — 

---

- `ACT_OBJ_STARTUP` = `464` — 

---

- `ACT_OBJ_RUNNING` = `465` — 

---

- `ACT_OBJ_IDLE` = `466` — 

---

- `ACT_OBJ_PLACING` = `467` — 

---

- `ACT_OBJ_DETERIORATING` = `468` — 

---

- `ACT_OBJ_UPGRADING` = `469` — 

---

- `ACT_DEPLOY` = `470` — 

---

- `ACT_DEPLOY_IDLE` = `471` — 

---

- `ACT_UNDEPLOY` = `472` — 

---

- `ACT_GRENADE_ROLL` = `473` — 

---

- `ACT_GRENADE_TOSS` = `474` — 

---

- `ACT_HANDGRENADE_THROW1` = `475` — 

---

- `ACT_HANDGRENADE_THROW2` = `476` — 

---

- `ACT_HANDGRENADE_THROW3` = `477` — 

---

- `ACT_SHOTGUN_IDLE_DEEP` = `478` — 

---

- `ACT_SHOTGUN_IDLE4` = `479` — 

---

- `ACT_GLOCK_SHOOTEMPTY` = `480` — 

---

- `ACT_GLOCK_SHOOT_RELOAD` = `481` — 

---

- `ACT_RPG_DRAW_UNLOADED` = `482` — 

---

- `ACT_RPG_HOLSTER_UNLOADED` = `483` — 

---

- `ACT_RPG_IDLE_UNLOADED` = `484` — 

---

- `ACT_RPG_FIDGET_UNLOADED` = `485` — 

---

- `ACT_CROSSBOW_DRAW_UNLOADED` = `486` — 

---

- `ACT_CROSSBOW_IDLE_UNLOADED` = `487` — 

---

- `ACT_CROSSBOW_FIDGET_UNLOADED` = `488` — 

---

- `ACT_GAUSS_SPINUP` = `489` — 

---

- `ACT_GAUSS_SPINCYCLE` = `490` — 

---

- `ACT_TRIPMINE_GROUND` = `491` — 

---

- `ACT_TRIPMINE_WORLD` = `492` — 

---

- `ACT_VM_PRIMARYATTACK_SILENCED` = `493` — 

---

- `ACT_VM_RELOAD_SILENCED` = `494` — 

---

- `ACT_VM_DRYFIRE_SILENCED` = `495` — 

---

- `ACT_VM_IDLE_SILENCED` = `496` — 

---

- `ACT_VM_DRAW_SILENCED` = `497` — 

---

- `ACT_VM_IDLE_EMPTY_LEFT` = `498` — 

---

- `ACT_VM_DRYFIRE_LEFT` = `499` — 

---

- `ACT_PLAYER_IDLE_FIRE` = `500` — 

---

- `ACT_PLAYER_CROUCH_FIRE` = `501` — 

---

- `ACT_PLAYER_CROUCH_WALK_FIRE` = `502` — 

---

- `ACT_PLAYER_WALK_FIRE` = `503` — 

---

- `ACT_PLAYER_RUN_FIRE` = `504` — 

---

- `ACT_IDLETORUN` = `505` — 

---

- `ACT_RUNTOIDLE` = `506` — 

---

- `ACT_SPRINT` = `507` — 

---

- `ACT_GET_DOWN_STAND` = `508` — 

---

- `ACT_GET_UP_STAND` = `509` — 

---

- `ACT_GET_DOWN_CROUCH` = `510` — 

---

- `ACT_GET_UP_CROUCH` = `511` — 

---

- `ACT_PRONE_FORWARD` = `512` — 

---

- `ACT_PRONE_IDLE` = `513` — 

---

- `ACT_DEEPIDLE1` = `514` — 

---

- `ACT_DEEPIDLE2` = `515` — 

---

- `ACT_DEEPIDLE3` = `516` — 

---

- `ACT_DEEPIDLE4` = `517` — 

---

- `ACT_VM_RELOAD_DEPLOYED` = `518` — 

---

- `ACT_VM_RELOAD_IDLE` = `519` — 

---

- `ACT_VM_DRAW_DEPLOYED` = `520` — 

---

- `ACT_VM_DRAW_EMPTY` = `521` — 

---

- `ACT_VM_PRIMARYATTACK_EMPTY` = `522` — 

---

- `ACT_VM_RELOAD_EMPTY` = `523` — 

---

- `ACT_VM_IDLE_EMPTY` = `524` — 

---

- `ACT_VM_IDLE_DEPLOYED_EMPTY` = `525` — 

---

- `ACT_VM_IDLE_8` = `526` — 

---

- `ACT_VM_IDLE_7` = `527` — 

---

- `ACT_VM_IDLE_6` = `528` — 

---

- `ACT_VM_IDLE_5` = `529` — 

---

- `ACT_VM_IDLE_4` = `530` — 

---

- `ACT_VM_IDLE_3` = `531` — 

---

- `ACT_VM_IDLE_2` = `532` — 

---

- `ACT_VM_IDLE_1` = `533` — 

---

- `ACT_VM_IDLE_DEPLOYED` = `534` — 

---

- `ACT_VM_IDLE_DEPLOYED_8` = `535` — 

---

- `ACT_VM_IDLE_DEPLOYED_7` = `536` — 

---

- `ACT_VM_IDLE_DEPLOYED_6` = `537` — 

---

- `ACT_VM_IDLE_DEPLOYED_5` = `538` — 

---

- `ACT_VM_IDLE_DEPLOYED_4` = `539` — 

---

- `ACT_VM_IDLE_DEPLOYED_3` = `540` — 

---

- `ACT_VM_IDLE_DEPLOYED_2` = `541` — 

---

- `ACT_VM_IDLE_DEPLOYED_1` = `542` — 

---

- `ACT_VM_UNDEPLOY` = `543` — 

---

- `ACT_VM_UNDEPLOY_8` = `544` — 

---

- `ACT_VM_UNDEPLOY_7` = `545` — 

---

- `ACT_VM_UNDEPLOY_6` = `546` — 

---

- `ACT_VM_UNDEPLOY_5` = `547` — 

---

- `ACT_VM_UNDEPLOY_4` = `548` — 

---

- `ACT_VM_UNDEPLOY_3` = `549` — 

---

- `ACT_VM_UNDEPLOY_2` = `550` — 

---

- `ACT_VM_UNDEPLOY_1` = `551` — 

---

- `ACT_VM_UNDEPLOY_EMPTY` = `552` — 

---

- `ACT_VM_DEPLOY` = `553` — 

---

- `ACT_VM_DEPLOY_8` = `554` — 

---

- `ACT_VM_DEPLOY_7` = `555` — 

---

- `ACT_VM_DEPLOY_6` = `556` — 

---

- `ACT_VM_DEPLOY_5` = `557` — 

---

- `ACT_VM_DEPLOY_4` = `558` — 

---

- `ACT_VM_DEPLOY_3` = `559` — 

---

- `ACT_VM_DEPLOY_2` = `560` — 

---

- `ACT_VM_DEPLOY_1` = `561` — 

---

- `ACT_VM_DEPLOY_EMPTY` = `562` — 

---

- `ACT_VM_PRIMARYATTACK_8` = `563` — 

---

- `ACT_VM_PRIMARYATTACK_7` = `564` — 

---

- `ACT_VM_PRIMARYATTACK_6` = `565` — 

---

- `ACT_VM_PRIMARYATTACK_5` = `566` — 

---

- `ACT_VM_PRIMARYATTACK_4` = `567` — 

---

- `ACT_VM_PRIMARYATTACK_3` = `568` — 

---

- `ACT_VM_PRIMARYATTACK_2` = `569` — 

---

- `ACT_VM_PRIMARYATTACK_1` = `570` — 

---

- `ACT_VM_PRIMARYATTACK_DEPLOYED` = `571` — 

---

- `ACT_VM_PRIMARYATTACK_DEPLOYED_8` = `572` — 

---

- `ACT_VM_PRIMARYATTACK_DEPLOYED_7` = `573` — 

---

- `ACT_VM_PRIMARYATTACK_DEPLOYED_6` = `574` — 

---

- `ACT_VM_PRIMARYATTACK_DEPLOYED_5` = `575` — 

---

- `ACT_VM_PRIMARYATTACK_DEPLOYED_4` = `576` — 

---

- `ACT_VM_PRIMARYATTACK_DEPLOYED_3` = `577` — 

---

- `ACT_VM_PRIMARYATTACK_DEPLOYED_2` = `578` — 

---

- `ACT_VM_PRIMARYATTACK_DEPLOYED_1` = `579` — 

---

- `ACT_VM_PRIMARYATTACK_DEPLOYED_EMPTY` = `580` — 

---

- `ACT_DOD_DEPLOYED` = `581` — 

---

- `ACT_DOD_PRONE_DEPLOYED` = `582` — 

---

- `ACT_DOD_IDLE_ZOOMED` = `583` — 

---

- `ACT_DOD_WALK_ZOOMED` = `584` — 

---

- `ACT_DOD_CROUCH_ZOOMED` = `585` — 

---

- `ACT_DOD_CROUCHWALK_ZOOMED` = `586` — 

---

- `ACT_DOD_PRONE_ZOOMED` = `587` — 

---

- `ACT_DOD_PRONE_FORWARD_ZOOMED` = `588` — 

---

- `ACT_DOD_PRIMARYATTACK_DEPLOYED` = `589` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_DEPLOYED` = `590` — 

---

- `ACT_DOD_RELOAD_DEPLOYED` = `591` — 

---

- `ACT_DOD_RELOAD_PRONE_DEPLOYED` = `592` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE` = `593` — 

---

- `ACT_DOD_SECONDARYATTACK_PRONE` = `594` — 

---

- `ACT_DOD_RELOAD_CROUCH` = `595` — 

---

- `ACT_DOD_RELOAD_PRONE` = `596` — 

---

- `ACT_DOD_STAND_IDLE` = `597` — 

---

- `ACT_DOD_STAND_AIM` = `598` — 

---

- `ACT_DOD_CROUCH_IDLE` = `599` — 

---

- `ACT_DOD_CROUCH_AIM` = `600` — 

---

- `ACT_DOD_CROUCHWALK_IDLE` = `601` — 

---

- `ACT_DOD_CROUCHWALK_AIM` = `602` — 

---

- `ACT_DOD_WALK_IDLE` = `603` — 

---

- `ACT_DOD_WALK_AIM` = `604` — 

---

- `ACT_DOD_RUN_IDLE` = `605` — 

---

- `ACT_DOD_RUN_AIM` = `606` — 

---

- `ACT_DOD_STAND_AIM_PISTOL` = `607` — 

---

- `ACT_DOD_CROUCH_AIM_PISTOL` = `608` — 

---

- `ACT_DOD_CROUCHWALK_AIM_PISTOL` = `609` — 

---

- `ACT_DOD_WALK_AIM_PISTOL` = `610` — 

---

- `ACT_DOD_RUN_AIM_PISTOL` = `611` — 

---

- `ACT_DOD_PRONE_AIM_PISTOL` = `612` — 

---

- `ACT_DOD_STAND_IDLE_PISTOL` = `613` — 

---

- `ACT_DOD_CROUCH_IDLE_PISTOL` = `614` — 

---

- `ACT_DOD_CROUCHWALK_IDLE_PISTOL` = `615` — 

---

- `ACT_DOD_WALK_IDLE_PISTOL` = `616` — 

---

- `ACT_DOD_RUN_IDLE_PISTOL` = `617` — 

---

- `ACT_DOD_SPRINT_IDLE_PISTOL` = `618` — 

---

- `ACT_DOD_PRONEWALK_IDLE_PISTOL` = `619` — 

---

- `ACT_DOD_STAND_AIM_C96` = `620` — 

---

- `ACT_DOD_CROUCH_AIM_C96` = `621` — 

---

- `ACT_DOD_CROUCHWALK_AIM_C96` = `622` — 

---

- `ACT_DOD_WALK_AIM_C96` = `623` — 

---

- `ACT_DOD_RUN_AIM_C96` = `624` — 

---

- `ACT_DOD_PRONE_AIM_C96` = `625` — 

---

- `ACT_DOD_STAND_IDLE_C96` = `626` — 

---

- `ACT_DOD_CROUCH_IDLE_C96` = `627` — 

---

- `ACT_DOD_CROUCHWALK_IDLE_C96` = `628` — 

---

- `ACT_DOD_WALK_IDLE_C96` = `629` — 

---

- `ACT_DOD_RUN_IDLE_C96` = `630` — 

---

- `ACT_DOD_SPRINT_IDLE_C96` = `631` — 

---

- `ACT_DOD_PRONEWALK_IDLE_C96` = `632` — 

---

- `ACT_DOD_STAND_AIM_RIFLE` = `633` — 

---

- `ACT_DOD_CROUCH_AIM_RIFLE` = `634` — 

---

- `ACT_DOD_CROUCHWALK_AIM_RIFLE` = `635` — 

---

- `ACT_DOD_WALK_AIM_RIFLE` = `636` — 

---

- `ACT_DOD_RUN_AIM_RIFLE` = `637` — 

---

- `ACT_DOD_PRONE_AIM_RIFLE` = `638` — 

---

- `ACT_DOD_STAND_IDLE_RIFLE` = `639` — 

---

- `ACT_DOD_CROUCH_IDLE_RIFLE` = `640` — 

---

- `ACT_DOD_CROUCHWALK_IDLE_RIFLE` = `641` — 

---

- `ACT_DOD_WALK_IDLE_RIFLE` = `642` — 

---

- `ACT_DOD_RUN_IDLE_RIFLE` = `643` — 

---

- `ACT_DOD_SPRINT_IDLE_RIFLE` = `644` — 

---

- `ACT_DOD_PRONEWALK_IDLE_RIFLE` = `645` — 

---

- `ACT_DOD_STAND_AIM_BOLT` = `646` — 

---

- `ACT_DOD_CROUCH_AIM_BOLT` = `647` — 

---

- `ACT_DOD_CROUCHWALK_AIM_BOLT` = `648` — 

---

- `ACT_DOD_WALK_AIM_BOLT` = `649` — 

---

- `ACT_DOD_RUN_AIM_BOLT` = `650` — 

---

- `ACT_DOD_PRONE_AIM_BOLT` = `651` — 

---

- `ACT_DOD_STAND_IDLE_BOLT` = `652` — 

---

- `ACT_DOD_CROUCH_IDLE_BOLT` = `653` — 

---

- `ACT_DOD_CROUCHWALK_IDLE_BOLT` = `654` — 

---

- `ACT_DOD_WALK_IDLE_BOLT` = `655` — 

---

- `ACT_DOD_RUN_IDLE_BOLT` = `656` — 

---

- `ACT_DOD_SPRINT_IDLE_BOLT` = `657` — 

---

- `ACT_DOD_PRONEWALK_IDLE_BOLT` = `658` — 

---

- `ACT_DOD_STAND_AIM_TOMMY` = `659` — 

---

- `ACT_DOD_CROUCH_AIM_TOMMY` = `660` — 

---

- `ACT_DOD_CROUCHWALK_AIM_TOMMY` = `661` — 

---

- `ACT_DOD_WALK_AIM_TOMMY` = `662` — 

---

- `ACT_DOD_RUN_AIM_TOMMY` = `663` — 

---

- `ACT_DOD_PRONE_AIM_TOMMY` = `664` — 

---

- `ACT_DOD_STAND_IDLE_TOMMY` = `665` — 

---

- `ACT_DOD_CROUCH_IDLE_TOMMY` = `666` — 

---

- `ACT_DOD_CROUCHWALK_IDLE_TOMMY` = `667` — 

---

- `ACT_DOD_WALK_IDLE_TOMMY` = `668` — 

---

- `ACT_DOD_RUN_IDLE_TOMMY` = `669` — 

---

- `ACT_DOD_SPRINT_IDLE_TOMMY` = `670` — 

---

- `ACT_DOD_PRONEWALK_IDLE_TOMMY` = `671` — 

---

- `ACT_DOD_STAND_AIM_MP40` = `672` — 

---

- `ACT_DOD_CROUCH_AIM_MP40` = `673` — 

---

- `ACT_DOD_CROUCHWALK_AIM_MP40` = `674` — 

---

- `ACT_DOD_WALK_AIM_MP40` = `675` — 

---

- `ACT_DOD_RUN_AIM_MP40` = `676` — 

---

- `ACT_DOD_PRONE_AIM_MP40` = `677` — 

---

- `ACT_DOD_STAND_IDLE_MP40` = `678` — 

---

- `ACT_DOD_CROUCH_IDLE_MP40` = `679` — 

---

- `ACT_DOD_CROUCHWALK_IDLE_MP40` = `680` — 

---

- `ACT_DOD_WALK_IDLE_MP40` = `681` — 

---

- `ACT_DOD_RUN_IDLE_MP40` = `682` — 

---

- `ACT_DOD_SPRINT_IDLE_MP40` = `683` — 

---

- `ACT_DOD_PRONEWALK_IDLE_MP40` = `684` — 

---

- `ACT_DOD_STAND_AIM_MP44` = `685` — 

---

- `ACT_DOD_CROUCH_AIM_MP44` = `686` — 

---

- `ACT_DOD_CROUCHWALK_AIM_MP44` = `687` — 

---

- `ACT_DOD_WALK_AIM_MP44` = `688` — 

---

- `ACT_DOD_RUN_AIM_MP44` = `689` — 

---

- `ACT_DOD_PRONE_AIM_MP44` = `690` — 

---

- `ACT_DOD_STAND_IDLE_MP44` = `691` — 

---

- `ACT_DOD_CROUCH_IDLE_MP44` = `692` — 

---

- `ACT_DOD_CROUCHWALK_IDLE_MP44` = `693` — 

---

- `ACT_DOD_WALK_IDLE_MP44` = `694` — 

---

- `ACT_DOD_RUN_IDLE_MP44` = `695` — 

---

- `ACT_DOD_SPRINT_IDLE_MP44` = `696` — 

---

- `ACT_DOD_PRONEWALK_IDLE_MP44` = `697` — 

---

- `ACT_DOD_STAND_AIM_GREASE` = `698` — 

---

- `ACT_DOD_CROUCH_AIM_GREASE` = `699` — 

---

- `ACT_DOD_CROUCHWALK_AIM_GREASE` = `700` — 

---

- `ACT_DOD_WALK_AIM_GREASE` = `701` — 

---

- `ACT_DOD_RUN_AIM_GREASE` = `702` — 

---

- `ACT_DOD_PRONE_AIM_GREASE` = `703` — 

---

- `ACT_DOD_STAND_IDLE_GREASE` = `704` — 

---

- `ACT_DOD_CROUCH_IDLE_GREASE` = `705` — 

---

- `ACT_DOD_CROUCHWALK_IDLE_GREASE` = `706` — 

---

- `ACT_DOD_WALK_IDLE_GREASE` = `707` — 

---

- `ACT_DOD_RUN_IDLE_GREASE` = `708` — 

---

- `ACT_DOD_SPRINT_IDLE_GREASE` = `709` — 

---

- `ACT_DOD_PRONEWALK_IDLE_GREASE` = `710` — 

---

- `ACT_DOD_STAND_AIM_MG` = `711` — 

---

- `ACT_DOD_CROUCH_AIM_MG` = `712` — 

---

- `ACT_DOD_CROUCHWALK_AIM_MG` = `713` — 

---

- `ACT_DOD_WALK_AIM_MG` = `714` — 

---

- `ACT_DOD_RUN_AIM_MG` = `715` — 

---

- `ACT_DOD_PRONE_AIM_MG` = `716` — 

---

- `ACT_DOD_STAND_IDLE_MG` = `717` — 

---

- `ACT_DOD_CROUCH_IDLE_MG` = `718` — 

---

- `ACT_DOD_CROUCHWALK_IDLE_MG` = `719` — 

---

- `ACT_DOD_WALK_IDLE_MG` = `720` — 

---

- `ACT_DOD_RUN_IDLE_MG` = `721` — 

---

- `ACT_DOD_SPRINT_IDLE_MG` = `722` — 

---

- `ACT_DOD_PRONEWALK_IDLE_MG` = `723` — 

---

- `ACT_DOD_STAND_AIM_30CAL` = `724` — 

---

- `ACT_DOD_CROUCH_AIM_30CAL` = `725` — 

---

- `ACT_DOD_CROUCHWALK_AIM_30CAL` = `726` — 

---

- `ACT_DOD_WALK_AIM_30CAL` = `727` — 

---

- `ACT_DOD_RUN_AIM_30CAL` = `728` — 

---

- `ACT_DOD_PRONE_AIM_30CAL` = `729` — 

---

- `ACT_DOD_STAND_IDLE_30CAL` = `730` — 

---

- `ACT_DOD_CROUCH_IDLE_30CAL` = `731` — 

---

- `ACT_DOD_CROUCHWALK_IDLE_30CAL` = `732` — 

---

- `ACT_DOD_WALK_IDLE_30CAL` = `733` — 

---

- `ACT_DOD_RUN_IDLE_30CAL` = `734` — 

---

- `ACT_DOD_SPRINT_IDLE_30CAL` = `735` — 

---

- `ACT_DOD_PRONEWALK_IDLE_30CAL` = `736` — 

---

- `ACT_DOD_STAND_AIM_GREN_FRAG` = `737` — 

---

- `ACT_DOD_CROUCH_AIM_GREN_FRAG` = `738` — 

---

- `ACT_DOD_CROUCHWALK_AIM_GREN_FRAG` = `739` — 

---

- `ACT_DOD_WALK_AIM_GREN_FRAG` = `740` — 

---

- `ACT_DOD_RUN_AIM_GREN_FRAG` = `741` — 

---

- `ACT_DOD_PRONE_AIM_GREN_FRAG` = `742` — 

---

- `ACT_DOD_SPRINT_AIM_GREN_FRAG` = `743` — 

---

- `ACT_DOD_PRONEWALK_AIM_GREN_FRAG` = `744` — 

---

- `ACT_DOD_STAND_AIM_GREN_STICK` = `745` — 

---

- `ACT_DOD_CROUCH_AIM_GREN_STICK` = `746` — 

---

- `ACT_DOD_CROUCHWALK_AIM_GREN_STICK` = `747` — 

---

- `ACT_DOD_WALK_AIM_GREN_STICK` = `748` — 

---

- `ACT_DOD_RUN_AIM_GREN_STICK` = `749` — 

---

- `ACT_DOD_PRONE_AIM_GREN_STICK` = `750` — 

---

- `ACT_DOD_SPRINT_AIM_GREN_STICK` = `751` — 

---

- `ACT_DOD_PRONEWALK_AIM_GREN_STICK` = `752` — 

---

- `ACT_DOD_STAND_AIM_KNIFE` = `753` — 

---

- `ACT_DOD_CROUCH_AIM_KNIFE` = `754` — 

---

- `ACT_DOD_CROUCHWALK_AIM_KNIFE` = `755` — 

---

- `ACT_DOD_WALK_AIM_KNIFE` = `756` — 

---

- `ACT_DOD_RUN_AIM_KNIFE` = `757` — 

---

- `ACT_DOD_PRONE_AIM_KNIFE` = `758` — 

---

- `ACT_DOD_SPRINT_AIM_KNIFE` = `759` — 

---

- `ACT_DOD_PRONEWALK_AIM_KNIFE` = `760` — 

---

- `ACT_DOD_STAND_AIM_SPADE` = `761` — 

---

- `ACT_DOD_CROUCH_AIM_SPADE` = `762` — 

---

- `ACT_DOD_CROUCHWALK_AIM_SPADE` = `763` — 

---

- `ACT_DOD_WALK_AIM_SPADE` = `764` — 

---

- `ACT_DOD_RUN_AIM_SPADE` = `765` — 

---

- `ACT_DOD_PRONE_AIM_SPADE` = `766` — 

---

- `ACT_DOD_SPRINT_AIM_SPADE` = `767` — 

---

- `ACT_DOD_PRONEWALK_AIM_SPADE` = `768` — 

---

- `ACT_DOD_STAND_AIM_BAZOOKA` = `769` — 

---

- `ACT_DOD_CROUCH_AIM_BAZOOKA` = `770` — 

---

- `ACT_DOD_CROUCHWALK_AIM_BAZOOKA` = `771` — 

---

- `ACT_DOD_WALK_AIM_BAZOOKA` = `772` — 

---

- `ACT_DOD_RUN_AIM_BAZOOKA` = `773` — 

---

- `ACT_DOD_PRONE_AIM_BAZOOKA` = `774` — 

---

- `ACT_DOD_STAND_IDLE_BAZOOKA` = `775` — 

---

- `ACT_DOD_CROUCH_IDLE_BAZOOKA` = `776` — 

---

- `ACT_DOD_CROUCHWALK_IDLE_BAZOOKA` = `777` — 

---

- `ACT_DOD_WALK_IDLE_BAZOOKA` = `778` — 

---

- `ACT_DOD_RUN_IDLE_BAZOOKA` = `779` — 

---

- `ACT_DOD_SPRINT_IDLE_BAZOOKA` = `780` — 

---

- `ACT_DOD_PRONEWALK_IDLE_BAZOOKA` = `781` — 

---

- `ACT_DOD_STAND_AIM_PSCHRECK` = `782` — 

---

- `ACT_DOD_CROUCH_AIM_PSCHRECK` = `783` — 

---

- `ACT_DOD_CROUCHWALK_AIM_PSCHRECK` = `784` — 

---

- `ACT_DOD_WALK_AIM_PSCHRECK` = `785` — 

---

- `ACT_DOD_RUN_AIM_PSCHRECK` = `786` — 

---

- `ACT_DOD_PRONE_AIM_PSCHRECK` = `787` — 

---

- `ACT_DOD_STAND_IDLE_PSCHRECK` = `788` — 

---

- `ACT_DOD_CROUCH_IDLE_PSCHRECK` = `789` — 

---

- `ACT_DOD_CROUCHWALK_IDLE_PSCHRECK` = `790` — 

---

- `ACT_DOD_WALK_IDLE_PSCHRECK` = `791` — 

---

- `ACT_DOD_RUN_IDLE_PSCHRECK` = `792` — 

---

- `ACT_DOD_SPRINT_IDLE_PSCHRECK` = `793` — 

---

- `ACT_DOD_PRONEWALK_IDLE_PSCHRECK` = `794` — 

---

- `ACT_DOD_STAND_AIM_BAR` = `795` — 

---

- `ACT_DOD_CROUCH_AIM_BAR` = `796` — 

---

- `ACT_DOD_CROUCHWALK_AIM_BAR` = `797` — 

---

- `ACT_DOD_WALK_AIM_BAR` = `798` — 

---

- `ACT_DOD_RUN_AIM_BAR` = `799` — 

---

- `ACT_DOD_PRONE_AIM_BAR` = `800` — 

---

- `ACT_DOD_STAND_IDLE_BAR` = `801` — 

---

- `ACT_DOD_CROUCH_IDLE_BAR` = `802` — 

---

- `ACT_DOD_CROUCHWALK_IDLE_BAR` = `803` — 

---

- `ACT_DOD_WALK_IDLE_BAR` = `804` — 

---

- `ACT_DOD_RUN_IDLE_BAR` = `805` — 

---

- `ACT_DOD_SPRINT_IDLE_BAR` = `806` — 

---

- `ACT_DOD_PRONEWALK_IDLE_BAR` = `807` — 

---

- `ACT_DOD_STAND_ZOOM_RIFLE` = `808` — 

---

- `ACT_DOD_CROUCH_ZOOM_RIFLE` = `809` — 

---

- `ACT_DOD_CROUCHWALK_ZOOM_RIFLE` = `810` — 

---

- `ACT_DOD_WALK_ZOOM_RIFLE` = `811` — 

---

- `ACT_DOD_RUN_ZOOM_RIFLE` = `812` — 

---

- `ACT_DOD_PRONE_ZOOM_RIFLE` = `813` — 

---

- `ACT_DOD_STAND_ZOOM_BOLT` = `814` — 

---

- `ACT_DOD_CROUCH_ZOOM_BOLT` = `815` — 

---

- `ACT_DOD_CROUCHWALK_ZOOM_BOLT` = `816` — 

---

- `ACT_DOD_WALK_ZOOM_BOLT` = `817` — 

---

- `ACT_DOD_RUN_ZOOM_BOLT` = `818` — 

---

- `ACT_DOD_PRONE_ZOOM_BOLT` = `819` — 

---

- `ACT_DOD_STAND_ZOOM_BAZOOKA` = `820` — 

---

- `ACT_DOD_CROUCH_ZOOM_BAZOOKA` = `821` — 

---

- `ACT_DOD_CROUCHWALK_ZOOM_BAZOOKA` = `822` — 

---

- `ACT_DOD_WALK_ZOOM_BAZOOKA` = `823` — 

---

- `ACT_DOD_RUN_ZOOM_BAZOOKA` = `824` — 

---

- `ACT_DOD_PRONE_ZOOM_BAZOOKA` = `825` — 

---

- `ACT_DOD_STAND_ZOOM_PSCHRECK` = `826` — 

---

- `ACT_DOD_CROUCH_ZOOM_PSCHRECK` = `827` — 

---

- `ACT_DOD_CROUCHWALK_ZOOM_PSCHRECK` = `828` — 

---

- `ACT_DOD_WALK_ZOOM_PSCHRECK` = `829` — 

---

- `ACT_DOD_RUN_ZOOM_PSCHRECK` = `830` — 

---

- `ACT_DOD_PRONE_ZOOM_PSCHRECK` = `831` — 

---

- `ACT_DOD_DEPLOY_RIFLE` = `832` — 

---

- `ACT_DOD_DEPLOY_TOMMY` = `833` — 

---

- `ACT_DOD_DEPLOY_MG` = `834` — 

---

- `ACT_DOD_DEPLOY_30CAL` = `835` — 

---

- `ACT_DOD_PRONE_DEPLOY_RIFLE` = `836` — 

---

- `ACT_DOD_PRONE_DEPLOY_TOMMY` = `837` — 

---

- `ACT_DOD_PRONE_DEPLOY_MG` = `838` — 

---

- `ACT_DOD_PRONE_DEPLOY_30CAL` = `839` — 

---

- `ACT_DOD_PRIMARYATTACK_RIFLE` = `840` — 

---

- `ACT_DOD_SECONDARYATTACK_RIFLE` = `841` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_RIFLE` = `842` — 

---

- `ACT_DOD_SECONDARYATTACK_PRONE_RIFLE` = `843` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_DEPLOYED_RIFLE` = `844` — 

---

- `ACT_DOD_PRIMARYATTACK_DEPLOYED_RIFLE` = `845` — 

---

- `ACT_DOD_PRIMARYATTACK_BOLT` = `846` — 

---

- `ACT_DOD_SECONDARYATTACK_BOLT` = `847` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_BOLT` = `848` — 

---

- `ACT_DOD_SECONDARYATTACK_PRONE_BOLT` = `849` — 

---

- `ACT_DOD_PRIMARYATTACK_TOMMY` = `850` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_TOMMY` = `851` — 

---

- `ACT_DOD_SECONDARYATTACK_TOMMY` = `852` — 

---

- `ACT_DOD_SECONDARYATTACK_PRONE_TOMMY` = `853` — 

---

- `ACT_DOD_PRIMARYATTACK_MP40` = `854` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_MP40` = `855` — 

---

- `ACT_DOD_SECONDARYATTACK_MP40` = `856` — 

---

- `ACT_DOD_SECONDARYATTACK_PRONE_MP40` = `857` — 

---

- `ACT_DOD_PRIMARYATTACK_MP44` = `858` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_MP44` = `859` — 

---

- `ACT_DOD_PRIMARYATTACK_GREASE` = `860` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_GREASE` = `861` — 

---

- `ACT_DOD_PRIMARYATTACK_PISTOL` = `862` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_PISTOL` = `863` — 

---

- `ACT_DOD_PRIMARYATTACK_C96` = `864` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_C96` = `865` — 

---

- `ACT_DOD_PRIMARYATTACK_MG` = `866` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_MG` = `867` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_DEPLOYED_MG` = `868` — 

---

- `ACT_DOD_PRIMARYATTACK_DEPLOYED_MG` = `869` — 

---

- `ACT_DOD_PRIMARYATTACK_30CAL` = `870` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_30CAL` = `871` — 

---

- `ACT_DOD_PRIMARYATTACK_DEPLOYED_30CAL` = `872` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_DEPLOYED_30CAL` = `873` — 

---

- `ACT_DOD_PRIMARYATTACK_GREN_FRAG` = `874` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_GREN_FRAG` = `875` — 

---

- `ACT_DOD_PRIMARYATTACK_GREN_STICK` = `876` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_GREN_STICK` = `877` — 

---

- `ACT_DOD_PRIMARYATTACK_KNIFE` = `878` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_KNIFE` = `879` — 

---

- `ACT_DOD_PRIMARYATTACK_SPADE` = `880` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_SPADE` = `881` — 

---

- `ACT_DOD_PRIMARYATTACK_BAZOOKA` = `882` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_BAZOOKA` = `883` — 

---

- `ACT_DOD_PRIMARYATTACK_PSCHRECK` = `884` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_PSCHRECK` = `885` — 

---

- `ACT_DOD_PRIMARYATTACK_BAR` = `886` — 

---

- `ACT_DOD_PRIMARYATTACK_PRONE_BAR` = `887` — 

---

- `ACT_DOD_RELOAD_GARAND` = `888` — 

---

- `ACT_DOD_RELOAD_K43` = `889` — 

---

- `ACT_DOD_RELOAD_BAR` = `890` — 

---

- `ACT_DOD_RELOAD_MP40` = `891` — 

---

- `ACT_DOD_RELOAD_MP44` = `892` — 

---

- `ACT_DOD_RELOAD_BOLT` = `893` — 

---

- `ACT_DOD_RELOAD_M1CARBINE` = `894` — 

---

- `ACT_DOD_RELOAD_TOMMY` = `895` — 

---

- `ACT_DOD_RELOAD_GREASEGUN` = `896` — 

---

- `ACT_DOD_RELOAD_PISTOL` = `897` — 

---

- `ACT_DOD_RELOAD_FG42` = `898` — 

---

- `ACT_DOD_RELOAD_RIFLE` = `899` — 

---

- `ACT_DOD_RELOAD_RIFLEGRENADE` = `900` — 

---

- `ACT_DOD_RELOAD_C96` = `901` — 

---

- `ACT_DOD_RELOAD_CROUCH_BAR` = `902` — 

---

- `ACT_DOD_RELOAD_CROUCH_RIFLE` = `903` — 

---

- `ACT_DOD_RELOAD_CROUCH_RIFLEGRENADE` = `904` — 

---

- `ACT_DOD_RELOAD_CROUCH_BOLT` = `905` — 

---

- `ACT_DOD_RELOAD_CROUCH_MP44` = `906` — 

---

- `ACT_DOD_RELOAD_CROUCH_MP40` = `907` — 

---

- `ACT_DOD_RELOAD_CROUCH_TOMMY` = `908` — 

---

- `ACT_DOD_RELOAD_CROUCH_BAZOOKA` = `909` — 

---

- `ACT_DOD_RELOAD_CROUCH_PSCHRECK` = `910` — 

---

- `ACT_DOD_RELOAD_CROUCH_PISTOL` = `911` — 

---

- `ACT_DOD_RELOAD_CROUCH_M1CARBINE` = `912` — 

---

- `ACT_DOD_RELOAD_CROUCH_C96` = `913` — 

---

- `ACT_DOD_RELOAD_BAZOOKA` = `914` — 

---

- `ACT_DOD_ZOOMLOAD_BAZOOKA` = `915` — 

---

- `ACT_DOD_RELOAD_PSCHRECK` = `916` — 

---

- `ACT_DOD_ZOOMLOAD_PSCHRECK` = `917` — 

---

- `ACT_DOD_RELOAD_DEPLOYED_FG42` = `918` — 

---

- `ACT_DOD_RELOAD_DEPLOYED_30CAL` = `919` — 

---

- `ACT_DOD_RELOAD_DEPLOYED_MG` = `920` — 

---

- `ACT_DOD_RELOAD_DEPLOYED_MG34` = `921` — 

---

- `ACT_DOD_RELOAD_DEPLOYED_BAR` = `922` — 

---

- `ACT_DOD_RELOAD_PRONE_PISTOL` = `923` — 

---

- `ACT_DOD_RELOAD_PRONE_GARAND` = `924` — 

---

- `ACT_DOD_RELOAD_PRONE_M1CARBINE` = `925` — 

---

- `ACT_DOD_RELOAD_PRONE_BOLT` = `926` — 

---

- `ACT_DOD_RELOAD_PRONE_K43` = `927` — 

---

- `ACT_DOD_RELOAD_PRONE_MP40` = `928` — 

---

- `ACT_DOD_RELOAD_PRONE_MP44` = `929` — 

---

- `ACT_DOD_RELOAD_PRONE_BAR` = `930` — 

---

- `ACT_DOD_RELOAD_PRONE_GREASEGUN` = `931` — 

---

- `ACT_DOD_RELOAD_PRONE_TOMMY` = `932` — 

---

- `ACT_DOD_RELOAD_PRONE_FG42` = `933` — 

---

- `ACT_DOD_RELOAD_PRONE_RIFLE` = `934` — 

---

- `ACT_DOD_RELOAD_PRONE_RIFLEGRENADE` = `935` — 

---

- `ACT_DOD_RELOAD_PRONE_C96` = `936` — 

---

- `ACT_DOD_RELOAD_PRONE_BAZOOKA` = `937` — 

---

- `ACT_DOD_ZOOMLOAD_PRONE_BAZOOKA` = `938` — 

---

- `ACT_DOD_RELOAD_PRONE_PSCHRECK` = `939` — 

---

- `ACT_DOD_ZOOMLOAD_PRONE_PSCHRECK` = `940` — 

---

- `ACT_DOD_RELOAD_PRONE_DEPLOYED_BAR` = `941` — 

---

- `ACT_DOD_RELOAD_PRONE_DEPLOYED_FG42` = `942` — 

---

- `ACT_DOD_RELOAD_PRONE_DEPLOYED_30CAL` = `943` — 

---

- `ACT_DOD_RELOAD_PRONE_DEPLOYED_MG` = `944` — 

---

- `ACT_DOD_RELOAD_PRONE_DEPLOYED_MG34` = `945` — 

---

- `ACT_DOD_PRONE_ZOOM_FORWARD_RIFLE` = `946` — 

---

- `ACT_DOD_PRONE_ZOOM_FORWARD_BOLT` = `947` — 

---

- `ACT_DOD_PRONE_ZOOM_FORWARD_BAZOOKA` = `948` — 

---

- `ACT_DOD_PRONE_ZOOM_FORWARD_PSCHRECK` = `949` — 

---

- `ACT_DOD_PRIMARYATTACK_CROUCH` = `950` — 

---

- `ACT_DOD_PRIMARYATTACK_CROUCH_SPADE` = `951` — 

---

- `ACT_DOD_PRIMARYATTACK_CROUCH_KNIFE` = `952` — 

---

- `ACT_DOD_PRIMARYATTACK_CROUCH_GREN_FRAG` = `953` — 

---

- `ACT_DOD_PRIMARYATTACK_CROUCH_GREN_STICK` = `954` — 

---

- `ACT_DOD_SECONDARYATTACK_CROUCH` = `955` — 

---

- `ACT_DOD_SECONDARYATTACK_CROUCH_TOMMY` = `956` — 

---

- `ACT_DOD_SECONDARYATTACK_CROUCH_MP40` = `957` — 

---

- `ACT_DOD_HS_IDLE` = `958` — 

---

- `ACT_DOD_HS_CROUCH` = `959` — 

---

- `ACT_DOD_HS_IDLE_30CAL` = `960` — 

---

- `ACT_DOD_HS_IDLE_BAZOOKA` = `961` — 

---

- `ACT_DOD_HS_IDLE_PSCHRECK` = `962` — 

---

- `ACT_DOD_HS_IDLE_KNIFE` = `963` — 

---

- `ACT_DOD_HS_IDLE_MG42` = `964` — 

---

- `ACT_DOD_HS_IDLE_PISTOL` = `965` — 

---

- `ACT_DOD_HS_IDLE_STICKGRENADE` = `966` — 

---

- `ACT_DOD_HS_IDLE_TOMMY` = `967` — 

---

- `ACT_DOD_HS_IDLE_MP44` = `968` — 

---

- `ACT_DOD_HS_IDLE_K98` = `969` — 

---

- `ACT_DOD_HS_CROUCH_30CAL` = `970` — 

---

- `ACT_DOD_HS_CROUCH_BAZOOKA` = `971` — 

---

- `ACT_DOD_HS_CROUCH_PSCHRECK` = `972` — 

---

- `ACT_DOD_HS_CROUCH_KNIFE` = `973` — 

---

- `ACT_DOD_HS_CROUCH_MG42` = `974` — 

---

- `ACT_DOD_HS_CROUCH_PISTOL` = `975` — 

---

- `ACT_DOD_HS_CROUCH_STICKGRENADE` = `976` — 

---

- `ACT_DOD_HS_CROUCH_TOMMY` = `977` — 

---

- `ACT_DOD_HS_CROUCH_MP44` = `978` — 

---

- `ACT_DOD_HS_CROUCH_K98` = `979` — 

---

- `ACT_DOD_STAND_IDLE_TNT` = `980` — 

---

- `ACT_DOD_CROUCH_IDLE_TNT` = `981` — 

---

- `ACT_DOD_CROUCHWALK_IDLE_TNT` = `982` — 

---

- `ACT_DOD_WALK_IDLE_TNT` = `983` — 

---

- `ACT_DOD_RUN_IDLE_TNT` = `984` — 

---

- `ACT_DOD_SPRINT_IDLE_TNT` = `985` — 

---

- `ACT_DOD_PRONEWALK_IDLE_TNT` = `986` — 

---

- `ACT_DOD_PLANT_TNT` = `987` — 

---

- `ACT_DOD_DEFUSE_TNT` = `988` — 

---

- `ACT_VM_FIZZLE` = `989` — 

---

- `ACT_MP_STAND_IDLE` = `990` — 

---

- `ACT_MP_CROUCH_IDLE` = `991` — 

---

- `ACT_MP_CROUCH_DEPLOYED_IDLE` = `992` — 

---

- `ACT_MP_CROUCH_DEPLOYED` = `993` — 

---

- `ACT_MP_DEPLOYED_IDLE` = `995` — 

---

- `ACT_MP_RUN` = `996` — 

---

- `ACT_MP_WALK` = `997` — 

---

- `ACT_MP_AIRWALK` = `998` — 

---

- `ACT_MP_CROUCHWALK` = `999` — 

---

- `ACT_MP_SPRINT` = `1000` — 

---

- `ACT_MP_JUMP` = `1001` — 

---

- `ACT_MP_JUMP_START` = `1002` — 

---

- `ACT_MP_JUMP_FLOAT` = `1003` — 

---

- `ACT_MP_JUMP_LAND` = `1004` — 

---

- `ACT_MP_DOUBLEJUMP` = `1005` — 

---

- `ACT_MP_SWIM` = `1006` — 

---

- `ACT_MP_DEPLOYED` = `1007` — 

---

- `ACT_MP_SWIM_DEPLOYED` = `1008` — 

---

- `ACT_MP_VCD` = `1009` — 

---

- `ACT_MP_SWIM_IDLE` = `1010` — 

---

- `ACT_MP_ATTACK_STAND_PRIMARYFIRE` = `1011` — 

---

- `ACT_MP_ATTACK_STAND_PRIMARYFIRE_DEPLOYED` = `1012` — 

---

- `ACT_MP_ATTACK_STAND_SECONDARYFIRE` = `1013` — 

---

- `ACT_MP_ATTACK_STAND_GRENADE` = `1014` — 

---

- `ACT_MP_ATTACK_CROUCH_PRIMARYFIRE` = `1015` — 

---

- `ACT_MP_ATTACK_CROUCH_PRIMARYFIRE_DEPLOYED` = `1016` — 

---

- `ACT_MP_ATTACK_CROUCH_SECONDARYFIRE` = `1017` — 

---

- `ACT_MP_ATTACK_CROUCH_GRENADE` = `1018` — 

---

- `ACT_MP_ATTACK_SWIM_PRIMARYFIRE` = `1019` — 

---

- `ACT_MP_ATTACK_SWIM_SECONDARYFIRE` = `1020` — 

---

- `ACT_MP_ATTACK_SWIM_GRENADE` = `1021` — 

---

- `ACT_MP_ATTACK_AIRWALK_PRIMARYFIRE` = `1022` — 

---

- `ACT_MP_ATTACK_AIRWALK_SECONDARYFIRE` = `1023` — 

---

- `ACT_MP_ATTACK_AIRWALK_GRENADE` = `1024` — 

---

- `ACT_MP_RELOAD_STAND` = `1025` — 

---

- `ACT_MP_RELOAD_STAND_LOOP` = `1026` — 

---

- `ACT_MP_RELOAD_STAND_END` = `1027` — 

---

- `ACT_MP_RELOAD_CROUCH` = `1028` — 

---

- `ACT_MP_RELOAD_CROUCH_LOOP` = `1029` — 

---

- `ACT_MP_RELOAD_CROUCH_END` = `1030` — 

---

- `ACT_MP_RELOAD_SWIM` = `1031` — 

---

- `ACT_MP_RELOAD_SWIM_LOOP` = `1032` — 

---

- `ACT_MP_RELOAD_SWIM_END` = `1033` — 

---

- `ACT_MP_RELOAD_AIRWALK` = `1034` — 

---

- `ACT_MP_RELOAD_AIRWALK_LOOP` = `1035` — 

---

- `ACT_MP_RELOAD_AIRWALK_END` = `1036` — 

---

- `ACT_MP_ATTACK_STAND_PREFIRE` = `1037` — 

---

- `ACT_MP_ATTACK_STAND_POSTFIRE` = `1038` — 

---

- `ACT_MP_ATTACK_STAND_STARTFIRE` = `1039` — 

---

- `ACT_MP_ATTACK_CROUCH_PREFIRE` = `1040` — 

---

- `ACT_MP_ATTACK_CROUCH_POSTFIRE` = `1041` — 

---

- `ACT_MP_ATTACK_SWIM_PREFIRE` = `1042` — 

---

- `ACT_MP_ATTACK_SWIM_POSTFIRE` = `1043` — 

---

- `ACT_MP_STAND_PRIMARY` = `1044` — 

---

- `ACT_MP_CROUCH_PRIMARY` = `1045` — 

---

- `ACT_MP_RUN_PRIMARY` = `1046` — 

---

- `ACT_MP_WALK_PRIMARY` = `1047` — 

---

- `ACT_MP_AIRWALK_PRIMARY` = `1048` — 

---

- `ACT_MP_CROUCHWALK_PRIMARY` = `1049` — 

---

- `ACT_MP_JUMP_PRIMARY` = `1050` — 

---

- `ACT_MP_JUMP_START_PRIMARY` = `1051` — 

---

- `ACT_MP_JUMP_FLOAT_PRIMARY` = `1052` — 

---

- `ACT_MP_JUMP_LAND_PRIMARY` = `1053` — 

---

- `ACT_MP_SWIM_PRIMARY` = `1054` — 

---

- `ACT_MP_DEPLOYED_PRIMARY` = `1055` — 

---

- `ACT_MP_SWIM_DEPLOYED_PRIMARY` = `1056` — 

---

- `ACT_MP_ATTACK_STAND_PRIMARY` = `1059` — 

---

- `ACT_MP_ATTACK_STAND_PRIMARY_DEPLOYED` = `1060` — 

---

- `ACT_MP_ATTACK_CROUCH_PRIMARY` = `1061` — 

---

- `ACT_MP_ATTACK_CROUCH_PRIMARY_DEPLOYED` = `1062` — 

---

- `ACT_MP_ATTACK_SWIM_PRIMARY` = `1063` — 

---

- `ACT_MP_ATTACK_AIRWALK_PRIMARY` = `1064` — 

---

- `ACT_MP_RELOAD_STAND_PRIMARY` = `1065` — 

---

- `ACT_MP_RELOAD_STAND_PRIMARY_LOOP` = `1066` — 

---

- `ACT_MP_RELOAD_STAND_PRIMARY_END` = `1067` — 

---

- `ACT_MP_RELOAD_CROUCH_PRIMARY` = `1068` — 

---

- `ACT_MP_RELOAD_CROUCH_PRIMARY_LOOP` = `1069` — 

---

- `ACT_MP_RELOAD_CROUCH_PRIMARY_END` = `1070` — 

---

- `ACT_MP_RELOAD_SWIM_PRIMARY` = `1071` — 

---

- `ACT_MP_RELOAD_SWIM_PRIMARY_LOOP` = `1072` — 

---

- `ACT_MP_RELOAD_SWIM_PRIMARY_END` = `1073` — 

---

- `ACT_MP_RELOAD_AIRWALK_PRIMARY` = `1074` — 

---

- `ACT_MP_RELOAD_AIRWALK_PRIMARY_LOOP` = `1075` — 

---

- `ACT_MP_RELOAD_AIRWALK_PRIMARY_END` = `1076` — 

---

- `ACT_MP_ATTACK_STAND_GRENADE_PRIMARY` = `1105` — 

---

- `ACT_MP_ATTACK_CROUCH_GRENADE_PRIMARY` = `1106` — 

---

- `ACT_MP_ATTACK_SWIM_GRENADE_PRIMARY` = `1107` — 

---

- `ACT_MP_ATTACK_AIRWALK_GRENADE_PRIMARY` = `1108` — 

---

- `ACT_MP_STAND_SECONDARY` = `1109` — 

---

- `ACT_MP_CROUCH_SECONDARY` = `1110` — 

---

- `ACT_MP_RUN_SECONDARY` = `1111` — 

---

- `ACT_MP_WALK_SECONDARY` = `1112` — 

---

- `ACT_MP_AIRWALK_SECONDARY` = `1113` — 

---

- `ACT_MP_CROUCHWALK_SECONDARY` = `1114` — 

---

- `ACT_MP_JUMP_SECONDARY` = `1115` — 

---

- `ACT_MP_JUMP_START_SECONDARY` = `1116` — 

---

- `ACT_MP_JUMP_FLOAT_SECONDARY` = `1117` — 

---

- `ACT_MP_JUMP_LAND_SECONDARY` = `1118` — 

---

- `ACT_MP_SWIM_SECONDARY` = `1119` — 

---

- `ACT_MP_ATTACK_STAND_SECONDARY` = `1120` — 

---

- `ACT_MP_ATTACK_CROUCH_SECONDARY` = `1121` — 

---

- `ACT_MP_ATTACK_SWIM_SECONDARY` = `1122` — 

---

- `ACT_MP_ATTACK_AIRWALK_SECONDARY` = `1123` — 

---

- `ACT_MP_RELOAD_STAND_SECONDARY` = `1124` — 

---

- `ACT_MP_RELOAD_STAND_SECONDARY_LOOP` = `1125` — 

---

- `ACT_MP_RELOAD_STAND_SECONDARY_END` = `1126` — 

---

- `ACT_MP_RELOAD_CROUCH_SECONDARY` = `1127` — 

---

- `ACT_MP_RELOAD_CROUCH_SECONDARY_LOOP` = `1128` — 

---

- `ACT_MP_RELOAD_CROUCH_SECONDARY_END` = `1129` — 

---

- `ACT_MP_RELOAD_SWIM_SECONDARY` = `1130` — 

---

- `ACT_MP_RELOAD_SWIM_SECONDARY_LOOP` = `1131` — 

---

- `ACT_MP_RELOAD_SWIM_SECONDARY_END` = `1132` — 

---

- `ACT_MP_RELOAD_AIRWALK_SECONDARY` = `1133` — 

---

- `ACT_MP_RELOAD_AIRWALK_SECONDARY_LOOP` = `1134` — 

---

- `ACT_MP_RELOAD_AIRWALK_SECONDARY_END` = `1135` — 

---

- `ACT_MP_ATTACK_STAND_GRENADE_SECONDARY` = `1140` — 

---

- `ACT_MP_ATTACK_CROUCH_GRENADE_SECONDARY` = `1141` — 

---

- `ACT_MP_ATTACK_SWIM_GRENADE_SECONDARY` = `1142` — 

---

- `ACT_MP_ATTACK_AIRWALK_GRENADE_SECONDARY` = `1143` — 

---

- `ACT_MP_STAND_MELEE` = `1171` — 

---

- `ACT_MP_CROUCH_MELEE` = `1172` — 

---

- `ACT_MP_RUN_MELEE` = `1173` — 

---

- `ACT_MP_WALK_MELEE` = `1174` — 

---

- `ACT_MP_AIRWALK_MELEE` = `1175` — 

---

- `ACT_MP_CROUCHWALK_MELEE` = `1176` — 

---

- `ACT_MP_JUMP_MELEE` = `1177` — 

---

- `ACT_MP_JUMP_START_MELEE` = `1178` — 

---

- `ACT_MP_JUMP_FLOAT_MELEE` = `1179` — 

---

- `ACT_MP_JUMP_LAND_MELEE` = `1180` — 

---

- `ACT_MP_SWIM_MELEE` = `1181` — 

---

- `ACT_MP_ATTACK_STAND_MELEE` = `1182` — 

---

- `ACT_MP_ATTACK_STAND_MELEE_SECONDARY` = `1183` — 

---

- `ACT_MP_ATTACK_CROUCH_MELEE` = `1184` — 

---

- `ACT_MP_ATTACK_CROUCH_MELEE_SECONDARY` = `1185` — 

---

- `ACT_MP_ATTACK_SWIM_MELEE` = `1186` — 

---

- `ACT_MP_ATTACK_AIRWALK_MELEE` = `1187` — 

---

- `ACT_MP_ATTACK_STAND_GRENADE_MELEE` = `1188` — 

---

- `ACT_MP_ATTACK_CROUCH_GRENADE_MELEE` = `1189` — 

---

- `ACT_MP_ATTACK_SWIM_GRENADE_MELEE` = `1190` — 

---

- `ACT_MP_ATTACK_AIRWALK_GRENADE_MELEE` = `1191` — 

---

- `ACT_MP_GESTURE_FLINCH` = `1258` — 

---

- `ACT_MP_GESTURE_FLINCH_PRIMARY` = `1259` — 

---

- `ACT_MP_GESTURE_FLINCH_SECONDARY` = `1260` — 

---

- `ACT_MP_GESTURE_FLINCH_MELEE` = `1261` — 

---

- `ACT_MP_GESTURE_FLINCH_HEAD` = `1264` — 

---

- `ACT_MP_GESTURE_FLINCH_CHEST` = `1265` — 

---

- `ACT_MP_GESTURE_FLINCH_STOMACH` = `1266` — 

---

- `ACT_MP_GESTURE_FLINCH_LEFTARM` = `1267` — 

---

- `ACT_MP_GESTURE_FLINCH_RIGHTARM` = `1268` — 

---

- `ACT_MP_GESTURE_FLINCH_LEFTLEG` = `1269` — 

---

- `ACT_MP_GESTURE_FLINCH_RIGHTLEG` = `1270` — 

---

- `ACT_MP_GRENADE1_DRAW` = `1271` — 

---

- `ACT_MP_GRENADE1_IDLE` = `1272` — 

---

- `ACT_MP_GRENADE1_ATTACK` = `1273` — 

---

- `ACT_MP_GRENADE2_DRAW` = `1274` — 

---

- `ACT_MP_GRENADE2_IDLE` = `1275` — 

---

- `ACT_MP_GRENADE2_ATTACK` = `1276` — 

---

- `ACT_MP_PRIMARY_GRENADE1_DRAW` = `1277` — 

---

- `ACT_MP_PRIMARY_GRENADE1_IDLE` = `1278` — 

---

- `ACT_MP_PRIMARY_GRENADE1_ATTACK` = `1279` — 

---

- `ACT_MP_PRIMARY_GRENADE2_DRAW` = `1280` — 

---

- `ACT_MP_PRIMARY_GRENADE2_IDLE` = `1281` — 

---

- `ACT_MP_PRIMARY_GRENADE2_ATTACK` = `1282` — 

---

- `ACT_MP_SECONDARY_GRENADE1_DRAW` = `1283` — 

---

- `ACT_MP_SECONDARY_GRENADE1_IDLE` = `1284` — 

---

- `ACT_MP_SECONDARY_GRENADE1_ATTACK` = `1285` — 

---

- `ACT_MP_SECONDARY_GRENADE2_DRAW` = `1286` — 

---

- `ACT_MP_SECONDARY_GRENADE2_IDLE` = `1287` — 

---

- `ACT_MP_SECONDARY_GRENADE2_ATTACK` = `1288` — 

---

- `ACT_MP_MELEE_GRENADE1_DRAW` = `1289` — 

---

- `ACT_MP_MELEE_GRENADE1_IDLE` = `1290` — 

---

- `ACT_MP_MELEE_GRENADE1_ATTACK` = `1291` — 

---

- `ACT_MP_MELEE_GRENADE2_DRAW` = `1292` — 

---

- `ACT_MP_MELEE_GRENADE2_IDLE` = `1293` — 

---

- `ACT_MP_MELEE_GRENADE2_ATTACK` = `1294` — 

---

- `ACT_MP_STAND_BUILDING` = `1307` — 

---

- `ACT_MP_CROUCH_BUILDING` = `1308` — 

---

- `ACT_MP_RUN_BUILDING` = `1309` — 

---

- `ACT_MP_WALK_BUILDING` = `1310` — 

---

- `ACT_MP_AIRWALK_BUILDING` = `1311` — 

---

- `ACT_MP_CROUCHWALK_BUILDING` = `1312` — 

---

- `ACT_MP_JUMP_BUILDING` = `1313` — 

---

- `ACT_MP_JUMP_START_BUILDING` = `1314` — 

---

- `ACT_MP_JUMP_FLOAT_BUILDING` = `1315` — 

---

- `ACT_MP_JUMP_LAND_BUILDING` = `1316` — 

---

- `ACT_MP_SWIM_BUILDING` = `1317` — 

---

- `ACT_MP_ATTACK_STAND_BUILDING` = `1318` — 

---

- `ACT_MP_ATTACK_CROUCH_BUILDING` = `1319` — 

---

- `ACT_MP_ATTACK_SWIM_BUILDING` = `1320` — 

---

- `ACT_MP_ATTACK_AIRWALK_BUILDING` = `1321` — 

---

- `ACT_MP_ATTACK_STAND_GRENADE_BUILDING` = `1322` — 

---

- `ACT_MP_ATTACK_CROUCH_GRENADE_BUILDING` = `1323` — 

---

- `ACT_MP_ATTACK_SWIM_GRENADE_BUILDING` = `1324` — 

---

- `ACT_MP_ATTACK_AIRWALK_GRENADE_BUILDING` = `1325` — 

---

- `ACT_MP_STAND_PDA` = `1345` — 

---

- `ACT_MP_CROUCH_PDA` = `1346` — 

---

- `ACT_MP_RUN_PDA` = `1347` — 

---

- `ACT_MP_WALK_PDA` = `1348` — 

---

- `ACT_MP_AIRWALK_PDA` = `1349` — 

---

- `ACT_MP_CROUCHWALK_PDA` = `1350` — 

---

- `ACT_MP_JUMP_PDA` = `1351` — 

---

- `ACT_MP_JUMP_START_PDA` = `1352` — 

---

- `ACT_MP_JUMP_FLOAT_PDA` = `1353` — 

---

- `ACT_MP_JUMP_LAND_PDA` = `1354` — 

---

- `ACT_MP_SWIM_PDA` = `1355` — 

---

- `ACT_MP_ATTACK_STAND_PDA` = `1356` — 

---

- `ACT_MP_ATTACK_SWIM_PDA` = `1357` — 

---

- `ACT_MP_GESTURE_VC_HANDMOUTH` = `1377` — 

---

- `ACT_MP_GESTURE_VC_FINGERPOINT` = `1378` — 

---

- `ACT_MP_GESTURE_VC_FISTPUMP` = `1379` — 

---

- `ACT_MP_GESTURE_VC_THUMBSUP` = `1380` — 

---

- `ACT_MP_GESTURE_VC_NODYES` = `1381` — 

---

- `ACT_MP_GESTURE_VC_NODNO` = `1382` — 

---

- `ACT_MP_GESTURE_VC_HANDMOUTH_PRIMARY` = `1383` — 

---

- `ACT_MP_GESTURE_VC_FINGERPOINT_PRIMARY` = `1384` — 

---

- `ACT_MP_GESTURE_VC_FISTPUMP_PRIMARY` = `1385` — 

---

- `ACT_MP_GESTURE_VC_THUMBSUP_PRIMARY` = `1386` — 

---

- `ACT_MP_GESTURE_VC_NODYES_PRIMARY` = `1387` — 

---

- `ACT_MP_GESTURE_VC_NODNO_PRIMARY` = `1388` — 

---

- `ACT_MP_GESTURE_VC_HANDMOUTH_SECONDARY` = `1389` — 

---

- `ACT_MP_GESTURE_VC_FINGERPOINT_SECONDARY` = `1390` — 

---

- `ACT_MP_GESTURE_VC_FISTPUMP_SECONDARY` = `1391` — 

---

- `ACT_MP_GESTURE_VC_THUMBSUP_SECONDARY` = `1392` — 

---

- `ACT_MP_GESTURE_VC_NODYES_SECONDARY` = `1393` — 

---

- `ACT_MP_GESTURE_VC_NODNO_SECONDARY` = `1394` — 

---

- `ACT_MP_GESTURE_VC_HANDMOUTH_MELEE` = `1395` — 

---

- `ACT_MP_GESTURE_VC_FINGERPOINT_MELEE` = `1396` — 

---

- `ACT_MP_GESTURE_VC_FISTPUMP_MELEE` = `1397` — 

---

- `ACT_MP_GESTURE_VC_THUMBSUP_MELEE` = `1398` — 

---

- `ACT_MP_GESTURE_VC_NODYES_MELEE` = `1399` — 

---

- `ACT_MP_GESTURE_VC_NODNO_MELEE` = `1400` — 

---

- `ACT_MP_GESTURE_VC_HANDMOUTH_BUILDING` = `1413` — 

---

- `ACT_MP_GESTURE_VC_FINGERPOINT_BUILDING` = `1414` — 

---

- `ACT_MP_GESTURE_VC_FISTPUMP_BUILDING` = `1415` — 

---

- `ACT_MP_GESTURE_VC_THUMBSUP_BUILDING` = `1416` — 

---

- `ACT_MP_GESTURE_VC_NODYES_BUILDING` = `1417` — 

---

- `ACT_MP_GESTURE_VC_NODNO_BUILDING` = `1418` — 

---

- `ACT_MP_GESTURE_VC_HANDMOUTH_PDA` = `1419` — 

---

- `ACT_MP_GESTURE_VC_FINGERPOINT_PDA` = `1420` — 

---

- `ACT_MP_GESTURE_VC_FISTPUMP_PDA` = `1421` — 

---

- `ACT_MP_GESTURE_VC_THUMBSUP_PDA` = `1422` — 

---

- `ACT_MP_GESTURE_VC_NODYES_PDA` = `1423` — 

---

- `ACT_MP_GESTURE_VC_NODNO_PDA` = `1424` — 

---

- `ACT_VM_UNUSABLE` = `1428` — 

---

- `ACT_VM_UNUSABLE_TO_USABLE` = `1429` — 

---

- `ACT_VM_USABLE_TO_UNUSABLE` = `1430` — 

---

- `ACT_GMOD_GESTURE_AGREE` = `1610` — 

---

- `ACT_GMOD_GESTURE_BECON` = `1611` — 

---

- `ACT_GMOD_GESTURE_BOW` = `1612` — 

---

- `ACT_GMOD_GESTURE_DISAGREE` = `1613` — 

---

- `ACT_GMOD_TAUNT_SALUTE` = `1614` — 

---

- `ACT_GMOD_GESTURE_WAVE` = `1615` — 

---

- `ACT_GMOD_TAUNT_PERSISTENCE` = `1616` — 

---

- `ACT_GMOD_TAUNT_MUSCLE` = `1617` — 

---

- `ACT_GMOD_TAUNT_LAUGH` = `1618` — 

---

- `ACT_GMOD_GESTURE_POINT` = `1619` — 

---

- `ACT_GMOD_TAUNT_CHEER` = `1620` — 

---

- `ACT_HL2MP_RUN_FAST` = `1621` — 

---

- `ACT_HL2MP_RUN_CHARGING` = `1622` — 

---

- `ACT_HL2MP_RUN_PANICKED` = `1623` — 

---

- `ACT_HL2MP_RUN_PROTECTED` = `1624` — 

---

- `ACT_HL2MP_IDLE_MELEE_ANGRY` = `1625` — 

---

- `ACT_HL2MP_ZOMBIE_SLUMP_IDLE` = `1626` — 

---

- `ACT_HL2MP_ZOMBIE_SLUMP_RISE` = `1627` — 

---

- `ACT_HL2MP_WALK_ZOMBIE_01` = `1628` — 

---

- `ACT_HL2MP_WALK_ZOMBIE_02` = `1629` — 

---

- `ACT_HL2MP_WALK_ZOMBIE_03` = `1630` — 

---

- `ACT_HL2MP_WALK_ZOMBIE_04` = `1631` — 

---

- `ACT_HL2MP_WALK_ZOMBIE_05` = `1632` — 

---

- `ACT_HL2MP_WALK_CROUCH_ZOMBIE_01` = `1633` — 

---

- `ACT_HL2MP_WALK_CROUCH_ZOMBIE_02` = `1634` — 

---

- `ACT_HL2MP_WALK_CROUCH_ZOMBIE_03` = `1635` — 

---

- `ACT_HL2MP_WALK_CROUCH_ZOMBIE_04` = `1636` — 

---

- `ACT_HL2MP_WALK_CROUCH_ZOMBIE_05` = `1637` — 

---

- `ACT_HL2MP_IDLE_CROUCH_ZOMBIE_01` = `1638` — 

---

- `ACT_HL2MP_IDLE_CROUCH_ZOMBIE_02` = `1639` — 

---

- `ACT_GMOD_GESTURE_RANGE_ZOMBIE` = `1640` — 

---

- `ACT_GMOD_GESTURE_TAUNT_ZOMBIE` = `1641` — 

---

- `ACT_GMOD_TAUNT_DANCE` = `1642` — 

---

- `ACT_GMOD_TAUNT_ROBOT` = `1643` — 

---

- `ACT_GMOD_GESTURE_RANGE_ZOMBIE_SPECIAL` = `1644` — 

---

- `ACT_GMOD_GESTURE_RANGE_FRENZY` = `1645` — 

---

- `ACT_HL2MP_RUN_ZOMBIE_FAST` = `1646` — 

---

- `ACT_HL2MP_WALK_ZOMBIE_06` = `1647` — 

---

- `ACT_ZOMBIE_LEAP_START` = `1648` — 

---

- `ACT_ZOMBIE_LEAPING` = `1649` — 

---

- `ACT_ZOMBIE_CLIMB_UP` = `1650` — 

---

- `ACT_ZOMBIE_CLIMB_START` = `1651` — 

---

- `ACT_ZOMBIE_CLIMB_END` = `1652` — 

---

- `ACT_HL2MP_IDLE_MAGIC` = `1653` — 

---

- `ACT_HL2MP_WALK_MAGIC` = `1654` — 

---

- `ACT_HL2MP_RUN_MAGIC` = `1655` — 

---

- `ACT_HL2MP_IDLE_CROUCH_MAGIC` = `1656` — 

---

- `ACT_HL2MP_WALK_CROUCH_MAGIC` = `1657` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_MAGIC` = `1658` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_MAGIC` = `1659` — 

---

- `ACT_HL2MP_JUMP_MAGIC` = `1660` — 

---

- `ACT_HL2MP_SWIM_IDLE_MAGIC` = `1661` — 

---

- `ACT_HL2MP_SWIM_MAGIC` = `1662` — 

---

- `ACT_HL2MP_IDLE_REVOLVER` = `1663` — 

---

- `ACT_HL2MP_WALK_REVOLVER` = `1664` — 

---

- `ACT_HL2MP_RUN_REVOLVER` = `1665` — 

---

- `ACT_HL2MP_IDLE_CROUCH_REVOLVER` = `1666` — 

---

- `ACT_HL2MP_WALK_CROUCH_REVOLVER` = `1667` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_REVOLVER` = `1668` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_REVOLVER` = `1669` — 

---

- `ACT_HL2MP_JUMP_REVOLVER` = `1670` — 

---

- `ACT_HL2MP_SWIM_IDLE_REVOLVER` = `1671` — 

---

- `ACT_HL2MP_SWIM_REVOLVER` = `1672` — 

---

- `ACT_HL2MP_IDLE_CAMERA` = `1673` — 

---

- `ACT_HL2MP_WALK_CAMERA` = `1674` — 

---

- `ACT_HL2MP_RUN_CAMERA` = `1675` — 

---

- `ACT_HL2MP_IDLE_CROUCH_CAMERA` = `1676` — 

---

- `ACT_HL2MP_WALK_CROUCH_CAMERA` = `1677` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_CAMERA` = `1678` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_CAMERA` = `1679` — 

---

- `ACT_HL2MP_JUMP_CAMERA` = `1680` — 

---

- `ACT_HL2MP_SWIM_IDLE_CAMERA` = `1681` — 

---

- `ACT_HL2MP_SWIM_CAMERA` = `1682` — 

---

- `ACT_HL2MP_IDLE_ANGRY` = `1683` — 

---

- `ACT_HL2MP_WALK_ANGRY` = `1684` — 

---

- `ACT_HL2MP_RUN_ANGRY` = `1685` — 

---

- `ACT_HL2MP_IDLE_CROUCH_ANGRY` = `1686` — 

---

- `ACT_HL2MP_WALK_CROUCH_ANGRY` = `1687` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_ANGRY` = `1688` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_ANGRY` = `1689` — 

---

- `ACT_HL2MP_JUMP_ANGRY` = `1690` — 

---

- `ACT_HL2MP_SWIM_IDLE_ANGRY` = `1691` — 

---

- `ACT_HL2MP_SWIM_ANGRY` = `1692` — 

---

- `ACT_HL2MP_IDLE_SCARED` = `1693` — 

---

- `ACT_HL2MP_WALK_SCARED` = `1694` — 

---

- `ACT_HL2MP_RUN_SCARED` = `1695` — 

---

- `ACT_HL2MP_IDLE_CROUCH_SCARED` = `1696` — 

---

- `ACT_HL2MP_WALK_CROUCH_SCARED` = `1697` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_SCARED` = `1698` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_SCARED` = `1699` — 

---

- `ACT_HL2MP_JUMP_SCARED` = `1700` — 

---

- `ACT_HL2MP_SWIM_IDLE_SCARED` = `1701` — 

---

- `ACT_HL2MP_SWIM_SCARED` = `1702` — 

---

- `ACT_HL2MP_IDLE_ZOMBIE` = `1703` — 

---

- `ACT_HL2MP_WALK_ZOMBIE` = `1704` — 

---

- `ACT_HL2MP_RUN_ZOMBIE` = `1705` — 

---

- `ACT_HL2MP_IDLE_CROUCH_ZOMBIE` = `1706` — 

---

- `ACT_HL2MP_WALK_CROUCH_ZOMBIE` = `1707` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_ZOMBIE` = `1708` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_ZOMBIE` = `1709` — 

---

- `ACT_HL2MP_JUMP_ZOMBIE` = `1710` — 

---

- `ACT_HL2MP_SWIM_IDLE_ZOMBIE` = `1711` — 

---

- `ACT_HL2MP_SWIM_ZOMBIE` = `1712` — 

---

- `ACT_HL2MP_IDLE_SUITCASE` = `1713` — 

---

- `ACT_HL2MP_WALK_SUITCASE` = `1714` — 

---

- `ACT_HL2MP_RUN_SUITCASE` = `1715` — 

---

- `ACT_HL2MP_IDLE_CROUCH_SUITCASE` = `1716` — 

---

- `ACT_HL2MP_WALK_CROUCH_SUITCASE` = `1717` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_SUITCASE` = `1718` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_SUITCASE` = `1719` — 

---

- `ACT_HL2MP_JUMP_SUITCASE` = `1720` — 

---

- `ACT_HL2MP_SWIM_IDLE_SUITCASE` = `1721` — 

---

- `ACT_HL2MP_SWIM_SUITCASE` = `1722` — 

---

- `ACT_HL2MP_IDLE` = `1777` — 

---

- `ACT_HL2MP_WALK` = `1778` — 

---

- `ACT_HL2MP_RUN` = `1779` — 

---

- `ACT_HL2MP_IDLE_CROUCH` = `1780` — 

---

- `ACT_HL2MP_WALK_CROUCH` = `1781` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK` = `1782` — 

---

- `ACT_HL2MP_GESTURE_RELOAD` = `1783` — 

---

- `ACT_HL2MP_JUMP` = `1784` — 

---

- `ACT_HL2MP_SWIM` = `1786` — 

---

- `ACT_HL2MP_IDLE_PISTOL` = `1787` — 

---

- `ACT_HL2MP_WALK_PISTOL` = `1788` — 

---

- `ACT_HL2MP_RUN_PISTOL` = `1789` — 

---

- `ACT_HL2MP_IDLE_CROUCH_PISTOL` = `1790` — 

---

- `ACT_HL2MP_WALK_CROUCH_PISTOL` = `1791` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_PISTOL` = `1792` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_PISTOL` = `1793` — 

---

- `ACT_HL2MP_JUMP_PISTOL` = `1794` — 

---

- `ACT_HL2MP_SWIM_IDLE_PISTOL` = `1795` — 

---

- `ACT_HL2MP_SWIM_PISTOL` = `1796` — 

---

- `ACT_HL2MP_IDLE_SMG1` = `1797` — 

---

- `ACT_HL2MP_WALK_SMG1` = `1798` — 

---

- `ACT_HL2MP_RUN_SMG1` = `1799` — 

---

- `ACT_HL2MP_IDLE_CROUCH_SMG1` = `1800` — 

---

- `ACT_HL2MP_WALK_CROUCH_SMG1` = `1801` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_SMG1` = `1802` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_SMG1` = `1803` — 

---

- `ACT_HL2MP_JUMP_SMG1` = `1804` — 

---

- `ACT_HL2MP_SWIM_IDLE_SMG1` = `1805` — 

---

- `ACT_HL2MP_SWIM_SMG1` = `1806` — 

---

- `ACT_HL2MP_IDLE_AR2` = `1807` — 

---

- `ACT_HL2MP_WALK_AR2` = `1808` — 

---

- `ACT_HL2MP_RUN_AR2` = `1809` — 

---

- `ACT_HL2MP_IDLE_CROUCH_AR2` = `1810` — 

---

- `ACT_HL2MP_WALK_CROUCH_AR2` = `1811` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_AR2` = `1812` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_AR2` = `1813` — 

---

- `ACT_HL2MP_JUMP_AR2` = `1814` — 

---

- `ACT_HL2MP_SWIM_IDLE_AR2` = `1815` — 

---

- `ACT_HL2MP_SWIM_AR2` = `1816` — 

---

- `ACT_HL2MP_IDLE_SHOTGUN` = `1817` — 

---

- `ACT_HL2MP_WALK_SHOTGUN` = `1818` — 

---

- `ACT_HL2MP_RUN_SHOTGUN` = `1819` — 

---

- `ACT_HL2MP_IDLE_CROUCH_SHOTGUN` = `1820` — 

---

- `ACT_HL2MP_WALK_CROUCH_SHOTGUN` = `1821` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_SHOTGUN` = `1822` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_SHOTGUN` = `1823` — 

---

- `ACT_HL2MP_JUMP_SHOTGUN` = `1824` — 

---

- `ACT_HL2MP_SWIM_IDLE_SHOTGUN` = `1825` — 

---

- `ACT_HL2MP_SWIM_SHOTGUN` = `1826` — 

---

- `ACT_HL2MP_IDLE_RPG` = `1827` — 

---

- `ACT_HL2MP_WALK_RPG` = `1828` — 

---

- `ACT_HL2MP_RUN_RPG` = `1829` — 

---

- `ACT_HL2MP_IDLE_CROUCH_RPG` = `1830` — 

---

- `ACT_HL2MP_WALK_CROUCH_RPG` = `1831` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_RPG` = `1832` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_RPG` = `1833` — 

---

- `ACT_HL2MP_JUMP_RPG` = `1834` — 

---

- `ACT_HL2MP_SWIM_IDLE_RPG` = `1835` — 

---

- `ACT_HL2MP_SWIM_RPG` = `1836` — 

---

- `ACT_HL2MP_IDLE_GRENADE` = `1837` — 

---

- `ACT_HL2MP_WALK_GRENADE` = `1838` — 

---

- `ACT_HL2MP_RUN_GRENADE` = `1839` — 

---

- `ACT_HL2MP_IDLE_CROUCH_GRENADE` = `1840` — 

---

- `ACT_HL2MP_WALK_CROUCH_GRENADE` = `1841` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_GRENADE` = `1842` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_GRENADE` = `1843` — 

---

- `ACT_HL2MP_JUMP_GRENADE` = `1844` — 

---

- `ACT_HL2MP_SWIM_IDLE_GRENADE` = `1845` — 

---

- `ACT_HL2MP_SWIM_GRENADE` = `1846` — 

---

- `ACT_HL2MP_IDLE_DUEL` = `1847` — 

---

- `ACT_HL2MP_WALK_DUEL` = `1848` — 

---

- `ACT_HL2MP_RUN_DUEL` = `1849` — 

---

- `ACT_HL2MP_IDLE_CROUCH_DUEL` = `1850` — 

---

- `ACT_HL2MP_WALK_CROUCH_DUEL` = `1851` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_DUEL` = `1852` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_DUEL` = `1853` — 

---

- `ACT_HL2MP_JUMP_DUEL` = `1854` — 

---

- `ACT_HL2MP_SWIM_IDLE_DUEL` = `1855` — 

---

- `ACT_HL2MP_SWIM_DUEL` = `1856` — 

---

- `ACT_HL2MP_IDLE_PHYSGUN` = `1857` — 

---

- `ACT_HL2MP_WALK_PHYSGUN` = `1858` — 

---

- `ACT_HL2MP_RUN_PHYSGUN` = `1859` — 

---

- `ACT_HL2MP_IDLE_CROUCH_PHYSGUN` = `1860` — 

---

- `ACT_HL2MP_WALK_CROUCH_PHYSGUN` = `1861` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_PHYSGUN` = `1862` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_PHYSGUN` = `1863` — 

---

- `ACT_HL2MP_JUMP_PHYSGUN` = `1864` — 

---

- `ACT_HL2MP_SWIM_IDLE_PHYSGUN` = `1865` — 

---

- `ACT_HL2MP_SWIM_PHYSGUN` = `1866` — 

---

- `ACT_HL2MP_IDLE_CROSSBOW` = `1867` — 

---

- `ACT_HL2MP_WALK_CROSSBOW` = `1868` — 

---

- `ACT_HL2MP_RUN_CROSSBOW` = `1869` — 

---

- `ACT_HL2MP_IDLE_CROUCH_CROSSBOW` = `1870` — 

---

- `ACT_HL2MP_WALK_CROUCH_CROSSBOW` = `1871` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_CROSSBOW` = `1872` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_CROSSBOW` = `1873` — 

---

- `ACT_HL2MP_JUMP_CROSSBOW` = `1874` — 

---

- `ACT_HL2MP_SWIM_IDLE_CROSSBOW` = `1875` — 

---

- `ACT_HL2MP_SWIM_CROSSBOW` = `1876` — 

---

- `ACT_HL2MP_IDLE_MELEE` = `1877` — 

---

- `ACT_HL2MP_WALK_MELEE` = `1878` — 

---

- `ACT_HL2MP_RUN_MELEE` = `1879` — 

---

- `ACT_HL2MP_IDLE_CROUCH_MELEE` = `1880` — 

---

- `ACT_HL2MP_WALK_CROUCH_MELEE` = `1881` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_MELEE` = `1882` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_MELEE` = `1883` — 

---

- `ACT_HL2MP_JUMP_MELEE` = `1884` — 

---

- `ACT_HL2MP_SWIM_IDLE_MELEE` = `1885` — 

---

- `ACT_HL2MP_SWIM_MELEE` = `1886` — 

---

- `ACT_HL2MP_IDLE_SLAM` = `1887` — 

---

- `ACT_HL2MP_WALK_SLAM` = `1888` — 

---

- `ACT_HL2MP_RUN_SLAM` = `1889` — 

---

- `ACT_HL2MP_IDLE_CROUCH_SLAM` = `1890` — 

---

- `ACT_HL2MP_WALK_CROUCH_SLAM` = `1891` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_SLAM` = `1892` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_SLAM` = `1893` — 

---

- `ACT_HL2MP_JUMP_SLAM` = `1894` — 

---

- `ACT_HL2MP_SWIM_IDLE_SLAM` = `1895` — 

---

- `ACT_HL2MP_SWIM_SLAM` = `1896` — 

---

- `ACT_VM_CRAWL` = `1897` — 

---

- `ACT_VM_CRAWL_EMPTY` = `1898` — 

---

- `ACT_VM_HOLSTER_EMPTY` = `1899` — 

---

- `ACT_VM_DOWN` = `1900` — 

---

- `ACT_VM_DOWN_EMPTY` = `1901` — 

---

- `ACT_VM_READY` = `1902` — 

---

- `ACT_VM_ISHOOT` = `1903` — 

---

- `ACT_VM_IIN` = `1904` — 

---

- `ACT_VM_IIN_EMPTY` = `1905` — 

---

- `ACT_VM_IIDLE` = `1906` — 

---

- `ACT_VM_IIDLE_EMPTY` = `1907` — 

---

- `ACT_VM_IOUT` = `1908` — 

---

- `ACT_VM_IOUT_EMPTY` = `1909` — 

---

- `ACT_VM_PULLBACK_HIGH_BAKE` = `1910` — 

---

- `ACT_VM_HITKILL` = `1911` — 

---

- `ACT_VM_DEPLOYED_IN` = `1912` — 

---

- `ACT_VM_DEPLOYED_IDLE` = `1913` — 

---

- `ACT_VM_DEPLOYED_FIRE` = `1914` — 

---

- `ACT_VM_DEPLOYED_DRYFIRE` = `1915` — 

---

- `ACT_VM_DEPLOYED_RELOAD` = `1916` — 

---

- `ACT_VM_DEPLOYED_RELOAD_EMPTY` = `1917` — 

---

- `ACT_VM_DEPLOYED_OUT` = `1918` — 

---

- `ACT_VM_DEPLOYED_IRON_IN` = `1919` — 

---

- `ACT_VM_DEPLOYED_IRON_IDLE` = `1920` — 

---

- `ACT_VM_DEPLOYED_IRON_FIRE` = `1921` — 

---

- `ACT_VM_DEPLOYED_IRON_DRYFIRE` = `1922` — 

---

- `ACT_VM_DEPLOYED_IRON_OUT` = `1923` — 

---

- `ACT_VM_DEPLOYED_LIFTED_IN` = `1924` — 

---

- `ACT_VM_DEPLOYED_LIFTED_IDLE` = `1925` — 

---

- `ACT_VM_DEPLOYED_LIFTED_OUT` = `1926` — 

---

- `ACT_VM_RELOADEMPTY` = `1927` — 

---

- `ACT_VM_IRECOIL1` = `1928` — 

---

- `ACT_VM_IRECOIL2` = `1929` — 

---

- `ACT_VM_FIREMODE` = `1930` — 

---

- `ACT_VM_ISHOOT_LAST` = `1931` — 

---

- `ACT_VM_IFIREMODE` = `1932` — 

---

- `ACT_VM_DFIREMODE` = `1933` — 

---

- `ACT_VM_DIFIREMODE` = `1934` — 

---

- `ACT_VM_SHOOTLAST` = `1935` — 

---

- `ACT_VM_ISHOOTDRY` = `1936` — 

---

- `ACT_VM_DRAW_M203` = `1937` — 

---

- `ACT_VM_DRAWFULL_M203` = `1938` — 

---

- `ACT_VM_READY_M203` = `1939` — 

---

- `ACT_VM_IDLE_M203` = `1940` — 

---

- `ACT_VM_RELOAD_M203` = `1941` — 

---

- `ACT_VM_HOLSTER_M203` = `1942` — 

---

- `ACT_VM_HOLSTERFULL_M203` = `1943` — 

---

- `ACT_VM_IIN_M203` = `1944` — 

---

- `ACT_VM_IIDLE_M203` = `1945` — 

---

- `ACT_VM_IOUT_M203` = `1946` — 

---

- `ACT_VM_CRAWL_M203` = `1947` — 

---

- `ACT_VM_DOWN_M203` = `1948` — 

---

- `ACT_VM_ISHOOT_M203` = `1949` — 

---

- `ACT_VM_RELOAD_INSERT` = `1950` — 

---

- `ACT_VM_RELOAD_INSERT_PULL` = `1951` — 

---

- `ACT_VM_RELOAD_END` = `1952` — 

---

- `ACT_VM_RELOAD_END_EMPTY` = `1953` — 

---

- `ACT_VM_RELOAD_INSERT_EMPTY` = `1954` — 

---

- `ACT_CROSSBOW_HOLSTER_UNLOADED` = `1955` — 

---

- `ACT_VM_FIRE_TO_EMPTY` = `1956` — 

---

- `ACT_VM_UNLOAD` = `1957` — 

---

- `ACT_VM_RELOAD2` = `1958` — 

---

- `ACT_GMOD_NOCLIP_LAYER` = `1959` — 

---

- `ACT_HL2MP_IDLE_FIST` = `1960` — 

---

- `ACT_HL2MP_WALK_FIST` = `1961` — 

---

- `ACT_HL2MP_RUN_FIST` = `1962` — 

---

- `ACT_HL2MP_IDLE_CROUCH_FIST` = `1963` — 

---

- `ACT_HL2MP_WALK_CROUCH_FIST` = `1964` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_FIST` = `1965` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_FIST` = `1966` — 

---

- `ACT_HL2MP_JUMP_FIST` = `1967` — 

---

- `ACT_HL2MP_SWIM_IDLE_FIST` = `1968` — 

---

- `ACT_HL2MP_SWIM_FIST` = `1969` — 

---

- `ACT_HL2MP_SIT` = `1970` — 

---

- `ACT_HL2MP_FIST_BLOCK` = `1971` — 

---

- `ACT_DRIVE_AIRBOAT` = `1972` — 

---

- `ACT_DRIVE_JEEP` = `1973` — 

---

- `ACT_GMOD_SIT_ROLLERCOASTER` = `1974` — 

---

- `ACT_HL2MP_IDLE_KNIFE` = `1975` — 

---

- `ACT_HL2MP_WALK_KNIFE` = `1976` — 

---

- `ACT_HL2MP_RUN_KNIFE` = `1977` — 

---

- `ACT_HL2MP_IDLE_CROUCH_KNIFE` = `1978` — 

---

- `ACT_HL2MP_WALK_CROUCH_KNIFE` = `1979` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_KNIFE` = `1980` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_KNIFE` = `1981` — 

---

- `ACT_HL2MP_JUMP_KNIFE` = `1982` — 

---

- `ACT_HL2MP_SWIM_IDLE_KNIFE` = `1983` — 

---

- `ACT_HL2MP_SWIM_KNIFE` = `1984` — 

---

- `ACT_HL2MP_IDLE_PASSIVE` = `1985` — 

---

- `ACT_HL2MP_WALK_PASSIVE` = `1986` — 

---

- `ACT_HL2MP_RUN_PASSIVE` = `1987` — 

---

- `ACT_HL2MP_IDLE_CROUCH_PASSIVE` = `1988` — 

---

- `ACT_HL2MP_WALK_CROUCH_PASSIVE` = `1989` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_PASSIVE` = `1990` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_PASSIVE` = `1991` — 

---

- `ACT_HL2MP_JUMP_PASSIVE` = `1992` — 

---

- `ACT_HL2MP_SWIM_PASSIVE` = `1993` — 

---

- `ACT_HL2MP_SWIM_IDLE_PASSIVE` = `1994` — 

---

- `ACT_HL2MP_IDLE_MELEE2` = `1995` — 

---

- `ACT_HL2MP_WALK_MELEE2` = `1996` — 

---

- `ACT_HL2MP_RUN_MELEE2` = `1997` — 

---

- `ACT_HL2MP_IDLE_CROUCH_MELEE2` = `1998` — 

---

- `ACT_HL2MP_WALK_CROUCH_MELEE2` = `1999` — 

---

- `ACT_HL2MP_GESTURE_RANGE_ATTACK_MELEE2` = `2000` — 

---

- `ACT_HL2MP_GESTURE_RELOAD_MELEE2` = `2001` — 

---

- `ACT_HL2MP_JUMP_MELEE2` = `2002` — 

---

- `ACT_HL2MP_SWIM_IDLE_MELEE2` = `2003` — 

---

- `ACT_HL2MP_SWIM_MELEE2` = `2004` — 

---

- `ACT_HL2MP_SIT_PISTOL` = `2005` — 

---

- `ACT_HL2MP_SIT_SHOTGUN` = `2006` — 

---

- `ACT_HL2MP_SIT_SMG1` = `2007` — 

---

- `ACT_HL2MP_SIT_AR2` = `2008` — 

---

- `ACT_HL2MP_SIT_PHYSGUN` = `2009` — 

---

- `ACT_HL2MP_SIT_GRENADE` = `2010` — 

---

- `ACT_HL2MP_SIT_RPG` = `2011` — 

---

- `ACT_HL2MP_SIT_CROSSBOW` = `2012` — 

---

- `ACT_HL2MP_SIT_MELEE` = `2013` — 

---

- `ACT_HL2MP_SIT_SLAM` = `2014` — 

---

- `ACT_HL2MP_SIT_FIST` = `2015` — 

---

- `ACT_GMOD_IN_CHAT` = `2019` — 

---

- `ACT_GMOD_GESTURE_ITEM_GIVE` = `2020` — 

---

- `ACT_GMOD_GESTURE_ITEM_DROP` = `2021` — 

---

- `ACT_GMOD_GESTURE_ITEM_PLACE` = `2022` — 

---

- `ACT_GMOD_GESTURE_ITEM_THROW` = `2023` — 

---

- `ACT_GMOD_GESTURE_MELEE_SHOVE_2HAND` = `2024` — 

---

- `ACT_GMOD_GESTURE_MELEE_SHOVE_1HAND` = `2025` — 

---

- `ACT_HL2MP_SWIM_IDLE` = `2026` — 

---

- `ACT_HL2MP_IDLE_COWER` = `2027` — 

---

- `ACT_GMOD_DEATH` = `2028` — 

---

- `ACT_DRIVE_POD` = `2029` — 

---

- `ACT_FLINCH` = `2030` — 

---

- `ACT_FLINCH_BACK` = `2031` — 

---

- `ACT_FLINCH_SHOULDER_LEFT` = `2032` — 

---

- `ACT_FLINCH_SHOULDER_RIGHT` = `2033` — 

---

- `ACT_HL2MP_SIT_CAMERA` = `2034` — 

---

- `ACT_HL2MP_SIT_PASSIVE` = `2035` — 

---

- `ACT_HL2MP_ZOMBIE_SLUMP_ALT_IDLE` = `2036` — 

---

- `ACT_HL2MP_ZOMBIE_SLUMP_ALT_RISE_FAST` = `2037` — 

---

- `ACT_HL2MP_ZOMBIE_SLUMP_ALT_RISE_SLOW` = `2038` — 

---

- `ACT_GMOD_SHOWOFF_STAND_01` = `2039` — 

---

- `ACT_GMOD_SHOWOFF_STAND_02` = `2040` — 

---

- `ACT_GMOD_SHOWOFF_STAND_03` = `2041` — 

---

- `ACT_GMOD_SHOWOFF_STAND_04` = `2042` — 

---

- `ACT_GMOD_SHOWOFF_DUCK_01` = `2043` — 

---

- `ACT_GMOD_SHOWOFF_DUCK_02` = `2044` — 

---

- `LAST_SHARED_ACTIVITY` = `2045` — The last shared activity number. IDs after this are "private" activities registered at runtime, and will have random IDs associated with specific ACTivities.

---

## `AIMR` `[server]`

---

Used by NPC:MoveClimbExec, NPC:MoveJumpExec and NPC:MoveJumpStop.

---

- `AIMR_ILLEGAL` = `-4` — Move is illegal for some reason.

---

- `AIMR_BLOCKED_NPC` = `-3` — Move was blocked by an NPC.

---

- `AIMR_BLOCKED_WORLD` = `-2` — Move was blocked by the world.

---

- `AIMR_BLOCKED_ENTITY` = `-1` — Move was blocked by an entity.

---

- `AIMR_OK` = `0` — Move op was ok.

---

- `AIMR_CHANGE_TYPE` = `1` — Locomotion method has changed.

---

## `AMMO` `[client/server]`

---

Used by game.AddAmmoType's input structure - the Structures/AmmoData.

These enumerations do not exist in game and are listed here only for reference

---

- `AMMO_FORCE_DROP_IF_CARRIED` = `1` — Forces player to drop the object they are carrying if the object was hit by this ammo type.

---

- `AMMO_INTERPRET_PLRDAMAGE_AS_DAMAGE_TO_PLAYER` = `2` — Uses Structures/AmmoData.plydmg of the ammo type as the damage to deal to shot players instead of Structures/Bullet.Damage.

---

## `ANALOG` `[client]`

---

The analog axis to get the value of via input.GetAnalogValue.

---

- `ANALOG_MOUSE_X` = `0` — 

---

- `ANALOG_MOUSE_Y` = `1` — 

---

- `ANALOG_MOUSE_WHEEL` = `3` — 

---

- `ANALOG_JOY_X` = `4` — 

---

- `ANALOG_JOY_Y` = `5` — 

---

- `ANALOG_JOY_Z` = `6` — 

---

- `ANALOG_JOY_R` = `7` — 

---

- `ANALOG_JOY_U` = `8` — 

---

- `ANALOG_JOY_V` = `9` — 

---

## `BLEND` `[client]`

---

These enums are used by render.OverrideBlend to determine what the Source and Destination color and alpha channel values for a given pixel will be multiplied by before they are sent to the Enums/BLENDFUNC to calculate the pixel's final color during draw operations.

For an interactive demonstration of how these enums behave, see [Anders Riggelsen's Visual glBlendFunc Tool here](https://www.andersriggelsen.dk/glblendfunc.php)

---

- `BLEND_ZERO` = `0` — The Multiplier will be `r=0`, `g=0`, `b=0`, `a=0`

This is useful for removing the Source or Destination from the final pixel color.

---

- `BLEND_ONE` = `1` — The Multiplier will be `r=1`, `g=1`, `b=1`, `a=1`

This is useful for keeping the Source or Destination as their starting values.

---

- `BLEND_DST_COLOR` = `2` — The Multiplier will be the same as the Destination color and alpha.

---

- `BLEND_ONE_MINUS_DST_COLOR` = `3` — Each color and alpha channel value of the Destination is subtracted from `1`.

**Example:**
If your Destination channels are: `r=1`, `g=0.25`, `b=0.1`, `a=1`
They will be modified by: `r=1-1`, `g=1-0.25`, `b=1-0.1`, `a=1-1`
The final Multiplier value will be: `r=0`, `g=0.75`, `b=0.9`, `a=0`

---

- `BLEND_SRC_ALPHA` = `4` — All color and alpha channels will be the same as the Source alpha value.

**Example:**
If your Source channels are: `r=0.1`, `g=0`, `b=1`, `a=0.5`
The final Multiplier value will be: `r=0.5`, `g=0.5`, `b=0.5`, `a=0.5`

---

- `BLEND_ONE_MINUS_SRC_ALPHA` = `5` — All color and alpha channels will be set to the Source alpha value subtracted from `1`.

**Example:**
If your Source channels are: `r=0`, `g=0.23`, `b=1`, `a=0.6`
The alpha channel will be modified by `a=1-0.6`
The final Multiplier value will be: `r=0.4`, `g=0.4`, `b=0.4`, `a=0.4`

---

- `BLEND_DST_ALPHA` = `6` — All color and alpha channels will be set to the the Destination alpha value.

**Example:**
If your Destination channels are: `r=0.1`, `g=0`, `b=1`, `a=0.5`
The final Multiplier value will be: `r=0.5`, `g=0.5`, `b=0.5`, `a=0.5`

---

- `BLEND_ONE_MINUS_DST_ALPHA` = `7` — All color and alpha channels will be set to the Destination alpha value subtracted from `1`.

**Example:**
If your Destination channels are: `r=0`, `g=0.23`, `b=1`, `a=0.6`
The alpha channel will be modified by `a=1-0.6`
The final Multiplier value will be: `r=0.4`, `g=0.4`, `b=0.4`, `a=0.4`

---

- `BLEND_SRC_ALPHA_SATURATE` = `8` — First, the Source alpha is compared against the Destination alpha value subtracted from `1` and the smaller of the two is kept.

Then, the Source color channels are multiplied by the value from the first step.

The Source alpha channel is multiplied by `1`.

**Example:**
If your Source channels are: `r=1`, `g=0.25`, `b=0.1`, `a=0.6`
and your Destination channels are: `r=0`, `g=1`, `b=0.5`, `a=0.75`

The Destination alpha value subtracted from `1` is calculated: `1-0.75` = `0.25`
The Source alpha `0.6` is compared to the subtracted Destination alpha `0.25` and the smaller of the two is kept (`0.25`)

The color channels of the Source are multiplied by the smaller value: `r=1*0.25`, `g=0.25*0.25`, `b=0.1*0.25`

The final Multiplier value will be `r=0.25`, `g=0.0625`, `b=0.025`, `a=0.6`

---

- `BLEND_SRC_COLOR` = `9` — The Multiplier will be the same as the Source color and alpha.

---

- `BLEND_ONE_MINUS_SRC_COLOR` = `10` — Each color and alpha channel value of the Source is subtracted from `1`.

**Example:**
If your Source channels are: `r=1`, `g=0.25`, `b=0.1`, `a=1`
They will be modified by: `r=1-1`, `g=1-0.25`, `b=1-0.1`, `a=1-1`
The final Multiplier value will be: `r=0`, `g=0.75`, `b=0.9`, `a=0`

---

## `BLENDFUNC` `[client/menu/server]`

---

These enums are used by render.OverrideBlend to combine the Source and Destination color and alpha into a final pixel color after they have been multiplied by their corresponding Enums/BLEND.

All results will be clamped in the range `(0-1)` and will produce final pixel channel values in the range `(0-255)`.

For an interactive demonstration of how these enums behave, see [Anders Riggelsen's Visual glBlendFunc Tool here](https://www.andersriggelsen.dk/glblendfunc.php)

---

- `BLENDFUNC_ADD` = `0` — **Source + Destination**
Adds each channel of the Source with the same channel of the Destination.

**Example:**
Using the Source channels: `r=0.0`, `g=0.25`, `b=0.1`, `a=0.9`
With Destination channels: `r=0.25`, `g=0.25`, `b=1.0`, `a=0.0`
The final pixel channels are: `r=0.25`, `g=0.5`, `b=1.0`, `a=0.9`

---

- `BLENDFUNC_SUBTRACT` = `1` — **Source - Destination**
Subtracts each channel of the Destination from the same channel of the Source.

**Example:**
Using the Source channels: `r=0.0`, `g=0.25`, `b=1.0`, `a=0.9`
With Destination channels: `r=0.25`, `g=0.1`, `b=0.4`, `a=0.0`
The final pixel channels are: `r=0.0`, `g=0.0`, `b=0.6`, `a=0.9`

---

- `BLENDFUNC_REVERSE_SUBTRACT` = `2` — **Destination - Source**
Subtracts each channel of the Source from the same channel of the Destination.

**Example:**
Using the Source channels: `r=0.0`, `g=0.25`, `b=1.0`, `a=0.9`
With Destination channels: `r=0.25`, `g=0.1`, `b=0.4`, `a=0.0`
The final pixel channels are: `r=0.0`, `g=0.75`, `b=0.0`, `a=0.0`

---

- `BLENDFUNC_MIN` = `3` — **Min(Source, Destination**
All of the Source channels are added together and compared to all of the Destination channels added together and the smaller of the two is used as the final pixel color.

---

- `BLENDFUNC_MAX` = `4` — **Max(Source, Destination**
All of the Source channels are added together and compared to all of the Destination channels added together and the larger of the two is used as the final pixel color.

---

## `BLOOD_COLOR` `[client/server]`

---

Enumerations used by Entity:GetBloodColor and Entity:SetBloodColor.

---

- `DONT_BLEED` = `-1` — No blood

---

- `BLOOD_COLOR_RED` = `0` — Normal red blood

---

- `BLOOD_COLOR_YELLOW` = `1` — Yellow blood

---

- `BLOOD_COLOR_GREEN` = `2` — Green-red blood

---

- `BLOOD_COLOR_MECH` = `3` — Sparks

---

- `BLOOD_COLOR_ANTLION` = `4` — Yellow blood

---

- `BLOOD_COLOR_ZOMBIE` = `5` — Green-red blood

---

- `BLOOD_COLOR_ANTLION_WORKER` = `6` — Bright green blood

---

## `BONE` `[client/server]`

---

Used by Entity:BoneHasFlag.

---

- `BONE_PHYSICALLY_SIMULATED` = `1` — Bone is physically simulated when physics are active

---

- `BONE_PHYSICS_PROCEDURAL` = `2` — Procedural when physics is active

---

- `BONE_ALWAYS_PROCEDURAL` = `4` — Bone is always procedurally animated

---

- `BONE_SCREEN_ALIGN_SPHERE` = `8` — Bone aligns to the screen, not constrained in motion.

---

- `BONE_SCREEN_ALIGN_CYLINDER` = `16` — Bone aligns to the screen, constrained by it's own axis.

---

- `BONE_CALCULATE_MASK` = `31` — 

---

- `BONE_USED_BY_HITBOX` = `256` — A hitbox is attached to this bone

---

- `BONE_USED_BY_ATTACHMENT` = `512` — An attachment is attached to this bone

---

- `BONE_USED_BY_VERTEX_LOD0` = `1024` — 

---

- `BONE_USED_BY_VERTEX_LOD1` = `2048` — 

---

- `BONE_USED_BY_VERTEX_LOD2` = `4096` — 

---

- `BONE_USED_BY_VERTEX_LOD3` = `8192` — 

---

- `BONE_USED_BY_VERTEX_LOD4` = `16384` — 

---

- `BONE_USED_BY_VERTEX_LOD5` = `32768` — 

---

- `BONE_USED_BY_VERTEX_LOD6` = `65536` — 

---

- `BONE_USED_BY_VERTEX_LOD7` = `131072` — 

---

- `BONE_USED_BY_VERTEX_MASK` = `261120` — 

---

- `BONE_USED_BY_BONE_MERGE` = `262144` — Bone is available for bone merge to occur against it

---

- `BONE_USED_BY_ANYTHING` = `524032` — Is this bone used by anything?

( If any BONE_USED_BY_* flags are true )

---

- `BONE_USED_MASK` = `524032` — 

---

## `BOUNDS` `[client/server]`

---

Enumerations used by Entity:SetSurroundingBoundsType.

---

- `BOUNDS_COLLISION` = `0` — Sets the bounds in relation to the entity's collision bounds.

---

- `BOUNDS_HITBOXES` = `2` — Sets the bounds to fit all hitboxes of the entity's model.

---

## `BOX` `[client/menu/server]`

---

Enumerations used by render.SetModelLighting.

---

- `BOX_FRONT` = `0` — Place the light from the front

---

- `BOX_BACK` = `1` — Place the light behind

---

- `BOX_RIGHT` = `2` — Place the light to the right

---

- `BOX_LEFT` = `3` — Place the light to the left

---

- `BOX_TOP` = `4` — Place the light to the top

---

- `BOX_BOTTOM` = `5` — Place the light to the bottom

---

## `BUTTON_CODE` `[client/menu/server]`

---

Encompasses the range of Enums/KEY, Enums/MOUSE and Enums/JOYSTICK, all of which can be used by:
* input.IsButtonDown
* input.LookupKeyBinding
* input.GetKeyName
* input.GetKeyCode
* GM:PlayerButtonDown
* GM:PlayerButtonUp

---

- `BUTTON_CODE_INVALID` = `-1` — 

---

- `BUTTON_CODE_NONE` = `0` — 

---

- `BUTTON_CODE_LAST` = `171` — 

---

- `BUTTON_CODE_COUNT` = `172` — 

---

## `CAP` `[server]`

---

Enumerations used by NPC:CapabilitiesAdd, WEAPON:GetCapabilities and NPC:CapabilitiesGet. Serverside only.

---

- `CAP_SIMPLE_RADIUS_DAMAGE` = `-2147483648` — When hit by an explosion, we'll simply block it instead of spilling it to entities behind us, the sv_robust_explosions cvar can also enable this globally when set to 0

---

- `CAP_MOVE_GROUND` = `1` — Walk/Run

---

- `CAP_MOVE_JUMP` = `2` — Jump/Leap

---

- `CAP_MOVE_FLY` = `4` — Can fly  move all around

---

- `CAP_MOVE_CLIMB` = `8` — climb ladders

---

- `CAP_MOVE_SWIM` = `16` — 

---

- `CAP_MOVE_CRAWL` = `32` — 

---

- `CAP_MOVE_SHOOT` = `64` — Tries to shoot weapon while moving

---

- `CAP_SKIP_NAV_GROUND_CHECK` = `128` — 

---

- `CAP_USE` = `256` — Open doors/push buttons/pull levers

---

- `CAP_AUTO_DOORS` = `1024` — Can trigger auto doors

---

- `CAP_OPEN_DOORS` = `2048` — Can open manual doors

---

- `CAP_TURN_HEAD` = `4096` — Can turn head  always bone controller 0

---

- `CAP_WEAPON_RANGE_ATTACK1` = `8192` — 

---

- `CAP_WEAPON_RANGE_ATTACK2` = `16384` — 

---

- `CAP_WEAPON_MELEE_ATTACK1` = `32768` — 

---

- `CAP_WEAPON_MELEE_ATTACK2` = `65536` — 

---

- `CAP_INNATE_RANGE_ATTACK1` = `131072` — 

---

- `CAP_INNATE_RANGE_ATTACK2` = `262144` — 

---

- `CAP_INNATE_MELEE_ATTACK1` = `524288` — 

---

- `CAP_INNATE_MELEE_ATTACK2` = `1048576` — 

---

- `CAP_USE_WEAPONS` = `2097152` — 

---

- `CAP_USE_SHOT_REGULATOR` = `16777216` — 

---

- `CAP_ANIMATEDFACE` = `8388608` — Has animated eyes/face

---

- `CAP_FRIENDLY_DMG_IMMUNE` = `33554432` — Don't take damage from npc's that are D_LI

---

- `CAP_SQUAD` = `67108864` — Can form squads

---

- `CAP_DUCK` = `134217728` — Cover and Reload ducking

---

- `CAP_NO_HIT_PLAYER` = `268435456` — Don't hit players

---

- `CAP_AIM_GUN` = `536870912` — Use arms to aim gun, not just body

---

- `CAP_NO_HIT_SQUADMATES` = `1073741824` — 

---

## `CHAN` `[client/server]`

---

Enumerations used by Global.EmitSound and sound.Add.

---

- `CHAN_REPLACE` = `-1` — Used when playing sounds through console commands.

---

- `CHAN_AUTO` = `0` — Automatic channel

---

- `CHAN_WEAPON` = `1` — Channel for weapon sounds

---

- `CHAN_VOICE` = `2` — Channel for NPC voices

---

- `CHAN_ITEM` = `3` — Channel for items ( Health kits, etc )

---

- `CHAN_BODY` = `4` — Clothing, ragdoll impacts, footsteps, knocking/pounding/punching etc.

---

- `CHAN_STREAM` = `5` — Stream channel from the static or dynamic area

---

- `CHAN_STATIC` = `6` — A constant/background sound that doesn't require any reaction.
**This channel allows same sounds files to play multiple times without cutting out.**

---

- `CHAN_VOICE2` = `7` — TF2s Announcer dialogue channel

---

- `CHAN_VOICE_BASE` = `8` — Channels 8-135 (128 channels) are allocated for player voice chat
**This channel allows same sounds files to play multiple times without cutting out.**

---

- `CHAN_USER_BASE` = `136` — Channels from this and onwards are allocated to game code

---

## `CLASS` `[server]`

---

Enumerations used by NPC:Classify.

---

- `CLASS_NONE` = `0` — None - default class for entities.

---

- `CLASS_PLAYER` = `1` — Players

---

- `CLASS_PLAYER_ALLY` = `2` — HL2 - **Allies**
- `monster_barney`
- `npc_citizen`
- `npc_manhack` ( Hacked )
- `npc_turret_floor` ( Friendly )

---

- `CLASS_PLAYER_ALLY_VITAL` = `3` — HL2 - **Vital Allies**
- `npc_magnusson`
- `npc_gman`
- `npc_fisherman`
- `npc_eli`
- `npc_barney`
- `npc_kleiner`
- `npc_mossman`
- `npc_alyx`
- `npc_monk`
- `npc_dog`
- `npc_vortigaunt` at the end of EP2 (controlled by `MakeGameEndAlly` input)

---

- `CLASS_ANTLION` = `4` — HL2 - **Antlions**
- `npc_antlion`
- `npc_antlionguard`
- `npc_antlionguard`

---

- `CLASS_BARNACLE` = `5` — HL2 - **Barnacles**
- `npc_barnacle`

---

- `CLASS_BULLSEYE` = `6` — HL2 - **Bullseyes**
- `npc_bullseye`

---

- `CLASS_CITIZEN_PASSIVE` = `7` — HL2 - **Passive / Non-Rebel Citizens**
- `npc_citizen` in the beginning of HL2.

---

- `CLASS_CITIZEN_REBEL` = `8` — HL2 -  Unused

---

- `CLASS_COMBINE` = `9` — HL2 - **Combine Troops**
- `npc_combine`
- `npc_advisor`
- `apc_missile`
- `npc_apcdriver`
- `npc_turret_floor` ( Hostile )
- `npc_rollermine` ( Hostile )
- `npc_turret_ground` ( Active )
- `npc_turret_ceiling` ( Active )
- `npc_strider` ( Active - Not being carried by the gunship )

---

- `CLASS_COMBINE_GUNSHIP` = `10` — HL2 - **Combine Aircrafts**
- `npc_combinegunship`
- `npc_combinedropship`
- `npc_helicopter`

---

- `CLASS_CONSCRIPT` = `11` — HL2 -  Unused

---

- `CLASS_HEADCRAB` = `12` — HL2 - **Headcrabs**
- `npc_headcrab` ( Visible )

---

- `CLASS_MANHACK` = `13` — HL2 - **Manhacks**
- `npc_manhack` ( Hostile - Not held by the gravity gun )

---

- `CLASS_METROPOLICE` = `14` — HL2 - **Metro Police**
- `npc_metropolice`
- `npc_vehicledriver`

---

- `CLASS_MILITARY` = `15` — HL2 - **Combine Military Objects**
- `func_guntarget`
- `npc_spotlight`
- `npc_combine_camera` ( Active )

---

- `CLASS_SCANNER` = `16` — HL2 - **Combine Scanners**
- `npc_cscanner`
- `npc_clawscanner`

---

- `CLASS_STALKER` = `17` — HL2 - **Stalkers**
- `npc_stalker`

---

- `CLASS_VORTIGAUNT` = `18` — HL2 - **Vortigaunts**
- `npc_vortigaunt` before the end of EP2 ( Controlled by `MakeGameEndAlly` input )

---

- `CLASS_ZOMBIE` = `19` — HL2 - **Zombies**
- `npc_zombie` ( Unslumped )
- `npc_poisonzombie`
- `npc_fastzombie`
- `npc_fastzombie_torso`
- `npc_zombine`

---

- `CLASS_PROTOSNIPER` = `20` — HL2 - **Snipers**
- `npc_sniper`
- `proto_sniper`

---

- `CLASS_MISSILE` = `21` — HL2 - **Missiles**
- `rpg_missile`
- `apc_missile`
- `grenade_pathfollower`

---

- `CLASS_FLARE` = `22` — HL2 - **Flares**
- `env_flare`

---

- `CLASS_EARTH_FAUNA` = `23` — HL2 - **Animals**
- `npc_crow`
- `npc_seagull`
- `npc_pigeon`

---

- `CLASS_HACKED_ROLLERMINE` = `24` — HL2 - **Friendly Rollermines**
- `npc_rollermine` ( Hacked )

---

- `CLASS_COMBINE_HUNTER` = `25` — HL2 - **Hunters**
- `npc_hunter`

---

- `CLASS_MACHINE` = `26` — HL:S - **Turrets**
- `monster_turret`
- `monster_miniturret`
- `monster_sentry`

---

- `CLASS_HUMAN_PASSIVE` = `27` — HL:S - **Friendly Humans**
- `monster_scientist`

---

- `CLASS_HUMAN_MILITARY` = `28` — HL:S - **Human Military**
- `monster_human_grunt`
- `monster_apache`

---

- `CLASS_ALIEN_MILITARY` = `29` — HL:S - **Alien Military**
- `monster_alien_controller`
- `monster_vortigaunt`
- `monster_alien_grunt`
- `monster_nihilanth`
- `monster_snark` if it has an enemy of class  `CLASS_PLAYER` , `CLASS_HUMAN_PASSIVE` or `CLASS_HUMAN_MILITARY`

---

- `CLASS_ALIEN_MONSTER` = `30` — HL:S - **Monsters**
- `monster_tentacle`
- `monster_barnacle`
- `monster_zombie`
- `monster_gargantua`
- `monster_houndeye`
- `monster_ichthyosaur`
- `monster_bigmomma`

---

- `CLASS_ALIEN_PREY` = `31` — HL:S - **Headcrabs**
- `monster_headcrab`

---

- `CLASS_ALIEN_PREDATOR` = `32` — HL:S - **Alien Predators**
- `monster_bullsquid`
- `xen_tree`
- `xen_hull`

---

- `CLASS_INSECT` = `33` — HL:S - **Insects**
- `montser_roach`
- `monster_leech`

---

- `CLASS_PLAYER_BIOWEAPON` = `34` — HL:S - **Player Bioweapons**
- `hornet` fired by a player

---

- `CLASS_ALIEN_BIOWEAPON` = `35` — HL:S - **Enemy Bioweapons**
- `hornet` fired by anyone but a player
- `monster_snark` with no enemy or an enemy without the class  `CLASS_PLAYER` , `CLASS_HUMAN_PASSIVE` or `CLASS_HUMAN_MILITARY`

---

- `CLASS_PORTAL_TURRET` = `36` — Portal - **Portal rocket and normal turrets, and the camera**
* `npc_portal_turret_floor`
* `npc_rocket_turret`
* `npc_security_camera`

---

## `COLLISION_GROUP` `[client/server]`

---

Enumerations used by Entity:SetCollisionGroup, Entity:GetCollisionGroup and Structures/Trace#collisiongroup.

---

- `COLLISION_GROUP_NONE` = `0` — Normal

---

- `COLLISION_GROUP_DEBRIS` = `1` — Collides with nothing but world and static stuff

---

- `COLLISION_GROUP_DEBRIS_TRIGGER` = `2` — Same as debris, but hits triggers. Useful for an item that can be shot, but doesn't collide.

---

- `COLLISION_GROUP_INTERACTIVE_DEBRIS` = `3` — Collides with everything except other interactive debris or debris

---

- `COLLISION_GROUP_INTERACTIVE` = `4` — Collides with everything except interactive debris or debris

---

- `COLLISION_GROUP_PLAYER` = `5` — Used by players, but NOT for movement collision. Does not collide with COLLISION_GROUP_PASSABLE_DOOR and COLLISION_GROUP_PUSHAWAY

---

- `COLLISION_GROUP_BREAKABLE_GLASS` = `6` — NPCs can see straight through an Entity with this applied.

---

- `COLLISION_GROUP_VEHICLE` = `7` — Used by driveable vehicles. Always collides against COLLISION_GROUP_VEHICLE_CLIP

---

- `COLLISION_GROUP_PLAYER_MOVEMENT` = `8` — For HL2, same as Collision_Group_Player, for TF2, this filters out other players and CBaseObjects

---

- `COLLISION_GROUP_NPC` = `9` — Generic NPC group

---

- `COLLISION_GROUP_IN_VEHICLE` = `10` — Doesn't collide with anything, no traces

---

- `COLLISION_GROUP_WEAPON` = `11` — Doesn't collide with players and vehicles

---

- `COLLISION_GROUP_VEHICLE_CLIP` = `12` — Only collides with vehicles

---

- `COLLISION_GROUP_PROJECTILE` = `13` — Set on projectiles. Does not collide with other projectiles.

---

- `COLLISION_GROUP_DOOR_BLOCKER` = `14` — Blocks entities not permitted to get near moving doors

---

- `COLLISION_GROUP_PASSABLE_DOOR` = `15` — Lets the Player through, nothing else.

---

- `COLLISION_GROUP_DISSOLVING` = `16` — Things that are dissolving are in this group

---

- `COLLISION_GROUP_PUSHAWAY` = `17` — Nonsolid on client and server, pushaway in player code

---

- `COLLISION_GROUP_NPC_ACTOR` = `18` — Used so NPCs in scripts ignore the player

---

- `COLLISION_GROUP_NPC_SCRIPTED` = `19` — Used for NPCs in scripts that should not collide with each other

---

- `COLLISION_GROUP_WORLD` = `20` — Doesn't collide with players/props

---

- `LAST_SHARED_COLLISION_GROUP` = `21` — Amount of COLLISION_GROUP_ enumerations

---

- `COLLISION_GROUP_HL2_SPIT` = `22` — Half-Life 2 exclusive collision group, acts similarly to `COLLISION_GROUP_PROJECTILE` but is also ignored by player movement.

---

## `COND` `[server]`

---

Enumerations for NPC conditions, used by NPC:SetCondition. Serverside only.

Unlike other Enums `COND` is a table that contains all the enums.

There are more conditions than listed here after **COND_NO_CUSTOM_INTERRUPTS**(70)
but the name depends on what's returned by NPC:ConditionName

---

- `COND.BEHIND_ENEMY` = `29` — 

---

- `COND.BETTER_WEAPON_AVAILABLE` = `46` — 

---

- `COND.CAN_MELEE_ATTACK1` = `23` — 

---

- `COND.CAN_MELEE_ATTACK2` = `24` — 

---

- `COND.CAN_RANGE_ATTACK1` = `21` — 

---

- `COND.CAN_RANGE_ATTACK2` = `22` — 

---

- `COND.ENEMY_DEAD` = `30` — 

---

- `COND.ENEMY_FACING_ME` = `28` — 

---

- `COND.ENEMY_OCCLUDED` = `13` — 

---

- `COND.ENEMY_TOO_FAR` = `27` — 

---

- `COND.ENEMY_UNREACHABLE` = `31` — 

---

- `COND.ENEMY_WENT_NULL` = `12` — 

---

- `COND.FLOATING_OFF_GROUND` = `61` — 

---

- `COND.GIVE_WAY` = `48` — 

---

- `COND.HAVE_ENEMY_LOS` = `15` — 

---

- `COND.HAVE_TARGET_LOS` = `16` — 

---

- `COND.HEALTH_ITEM_AVAILABLE` = `47` — 

---

- `COND.HEAR_BUGBAIT` = `52` — 

---

- `COND.HEAR_BULLET_IMPACT` = `56` — 

---

- `COND.HEAR_COMBAT` = `53` — 

---

- `COND.HEAR_DANGER` = `50` — 

---

- `COND.HEAR_MOVE_AWAY` = `58` — 

---

- `COND.HEAR_PHYSICS_DANGER` = `57` — 

---

- `COND.HEAR_PLAYER` = `55` — 

---

- `COND.HEAR_SPOOKY` = `59` — 

---

- `COND.HEAR_THUMPER` = `51` — 

---

- `COND.HEAR_WORLD` = `54` — 

---

- `COND.HEAVY_DAMAGE` = `18` — 

---

- `COND.IDLE_INTERRUPT` = `2` — 

---

- `COND.IN_PVS` = `1` — 

---

- `COND.LIGHT_DAMAGE` = `17` — 

---

- `COND.LOST_ENEMY` = `11` — 

---

- `COND.LOST_PLAYER` = `33` — 

---

- `COND.LOW_PRIMARY_AMMO` = `3` — 

---

- `COND.MOBBED_BY_ENEMIES` = `62` — 

---

- `COND.NEW_ENEMY` = `26` — 

---

- `COND.NO_CUSTOM_INTERRUPTS` = `70` — 

---

- `COND.NO_HEAR_DANGER` = `60` — 

---

- `COND.NO_PRIMARY_AMMO` = `4` — 

---

- `COND.NO_SECONDARY_AMMO` = `5` — 

---

- `COND.NO_WEAPON` = `6` — 

---

- `COND.NONE` = `0` — No additional conditions are being played

---

- `COND.NOT_FACING_ATTACK` = `40` — 

---

- `COND.NPC_FREEZE` = `67` — Freezes NPC movement

---

- `COND.NPC_UNFREEZE` = `68` — Unfreezes NPC movement

---

- `COND.PHYSICS_DAMAGE` = `19` — 

---

- `COND.PLAYER_ADDED_TO_SQUAD` = `64` — 

---

- `COND.PLAYER_PUSHING` = `66` — 

---

- `COND.PLAYER_REMOVED_FROM_SQUAD` = `65` — 

---

- `COND.PROVOKED` = `25` — 

---

- `COND.RECEIVED_ORDERS` = `63` — 

---

- `COND.REPEATED_DAMAGE` = `20` — 

---

- `COND.SCHEDULE_DONE` = `36` — 

---

- `COND.SEE_DISLIKE` = `9` — 

---

- `COND.SEE_ENEMY` = `10` — 

---

- `COND.SEE_FEAR` = `8` — 

---

- `COND.SEE_HATE` = `7` — 

---

- `COND.SEE_NEMESIS` = `34` — 

---

- `COND.SEE_PLAYER` = `32` — 

---

- `COND.SMELL` = `37` — 

---

- `COND.TALKER_RESPOND_TO_QUESTION` = `69` — 

---

- `COND.TARGET_OCCLUDED` = `14` — 

---

- `COND.TASK_FAILED` = `35` — 

---

- `COND.TOO_CLOSE_TO_ATTACK` = `38` — 

---

- `COND.TOO_FAR_TO_ATTACK` = `39` — 

---

- `COND.WAY_CLEAR` = `49` — 

---

- `COND.WEAPON_BLOCKED_BY_FRIEND` = `42` — 

---

- `COND.WEAPON_HAS_LOS` = `41` — 

---

- `COND.WEAPON_PLAYER_IN_SPREAD` = `43` — 

---

- `COND.WEAPON_PLAYER_NEAR_TARGET` = `44` — 

---

- `COND.WEAPON_SIGHT_OCCLUDED` = `45` — 

---

## `CONTENTS` `[client/server]`

---

Enumerations used by util.PointContents and PhysObj:SetContents as tracer masks, and by Structures/ENT#PhysicsSolidMask for collision masking.

---

- `CONTENTS_EMPTY` = `0` — Things that are not solid

---

- `CONTENTS_SOLID` = `1` — Things that are solid

---

- `CONTENTS_WINDOW` = `2` — Glass

---

- `CONTENTS_AUX` = `4` — 

---

- `CONTENTS_GRATE` = `8` — Bullets go through, solids don't

---

- `CONTENTS_SLIME` = `16` — 

---

- `CONTENTS_WATER` = `32` — Hits world but not skybox

---

- `CONTENTS_BLOCKLOS` = `64` — Things that block line of sight

---

- `CONTENTS_OPAQUE` = `128` — Things that block light

---

- `CONTENTS_TESTFOGVOLUME` = `256` — 

---

- `CONTENTS_TEAM4` = `512` — 

---

- `CONTENTS_TEAM3` = `1024` — 

---

- `CONTENTS_TEAM1` = `2048` — 

---

- `CONTENTS_TEAM2` = `4096` — 

---

- `CONTENTS_IGNORE_NODRAW_OPAQUE` = `8192` — 

---

- `CONTENTS_MOVEABLE` = `16384` — 

---

- `CONTENTS_AREAPORTAL` = `32768` — 

---

- `CONTENTS_PLAYERCLIP` = `65536` — 

---

- `CONTENTS_MONSTERCLIP` = `131072` — 

---

- `CONTENTS_CURRENT_0` = `262144` — 

---

- `CONTENTS_CURRENT_180` = `1048576` — 

---

- `CONTENTS_CURRENT_270` = `2097152` — 

---

- `CONTENTS_CURRENT_90` = `524288` — 

---

- `CONTENTS_CURRENT_DOWN` = `8388608` — 

---

- `CONTENTS_CURRENT_UP` = `4194304` — 

---

- `CONTENTS_DEBRIS` = `67108864` — Includes, among other things, client-side ragdolls and prop gibs

---

- `CONTENTS_DETAIL` = `134217728` — 

---

- `CONTENTS_HITBOX` = `1073741824` — Hitbox

---

- `CONTENTS_LADDER` = `536870912` — Ladder

---

- `CONTENTS_MONSTER` = `33554432` — NPCs

---

- `CONTENTS_ORIGIN` = `16777216` — 

---

- `CONTENTS_TRANSLUCENT` = `268435456` — Hits world but not skybox

---

- `LAST_VISIBLE_CONTENTS` = `128` — Last visible contents enumeration

---

- `ALL_VISIBLE_CONTENTS` = `255` — Sum of all the visible contents enumerations

---

## `CREATERENDERTARGETFLAGS` `[client]`

---

Enumerations used by Global.GetRenderTargetEx. Clientside only.

---

- `CREATERENDERTARGETFLAGS_HDR` = `1` — Makes this render target an HDR render target if the current system supports HDR.

---

- `CREATERENDERTARGETFLAGS_AUTOMIPMAP` = `2` — Does nothing.

---

- `CREATERENDERTARGETFLAGS_UNFILTERABLE_OK` = `4` — Does nothing

---

## `CT` `[server]`

---

Citizen type, a KeyValue for npc_citizen( citizentype ), serverside only.

---

- `CT_DEFAULT` = `0` — Default citizen

---

- `CT_DOWNTRODDEN` = `1` — Default citizen(?)

---

- `CT_REFUGEE` = `2` — Refugee

---

- `CT_REBEL` = `3` — Rebel

---

- `CT_UNIQUE` = `4` — Odessa?

---

## `D` `[server]`

---

Enumerations used by NPC:Disposition and ENTITY:GetRelationship.

---

- `D_ER` = `0` — Error

---

- `D_HT` = `1` — Hate

---

- `D_FR` = `2` — Frightened / Fear

---

- `D_LI` = `3` — Like

---

- `D_NU` = `4` — Neutral

---

## `DEATH_NOTICE` `[client/server]`

---

Enumerations used internally by death notice system.

This enumeration is a bit field/bitflag, which means that you can combine multiple death flags using the bit library. You can use bit.band to test if a specific death flag is set.

---

- `DEATH_NOTICE_FRIENDLY_VICTIM` = `1` — Was the victim friendly?

---

- `DEATH_NOTICE_FRIENDLY_ATTACKER` = `2` — Was the attacker friendly?

---

## `DISPSURF` `[client/server]`

---

Displacement surface flags, used by the Structures/TraceResult.

---

- `DISPSURF_SURFACE` = `1` — 

---

- `DISPSURF_WALKABLE` = `2` — 

---

- `DISPSURF_BUILDABLE` = `4` — 

---

- `DISPSURF_SURFPROP1` = `8` — 

---

- `DISPSURF_SURFPROP2` = `16` — 

---

## `DMG` `[client/server]`

---

Enumerations used by CTakeDamageInfo:GetDamageType, CTakeDamageInfo:SetDamageType and CTakeDamageInfo:IsDamageType.

This enumeration is a bit field/bitflag, which means that you can combine multiple damage types using the bit library. You can use bit.band to test if a specific damage type is set.

---

- `DMG_GENERIC` = `0` — Generic damage (used by weapon_fists)

---

- `DMG_CRUSH` = `1` — Caused by physics interaction and ignored by airboat drivers. This is used by the Rollermine and an unused animation attack called 'Fireattack' by the Antlion Guard [ACT_RANGE_ATTACK1](https://wiki.facepunch.com/gmod/Enums/ACT)

---

- `DMG_BULLET` = `2` — Bullet damage from Ceiling Turrets, the Strider, Turrets and most guns.

---

- `DMG_SLASH` = `4` — Used by the Stunstick, Manhacks, Antlions, Antlion Guards, Headcrabs, Fast Headcrabs, all Zombies types, Hunter, and potentially other NPCs attacks

---

- `DMG_BURN` = `8` — Damage from fire

---

- `DMG_VEHICLE` = `16` — Hit by a vehicle (This will need to be set for passengers of some vehicle to receive damage)

---

- `DMG_FALL` = `32` — Fall damage

---

- `DMG_BLAST` = `64` — Explosion damage like grenades, helicopter bombs, combine mines, Will be ignored by most vehicle passengers.

---

- `DMG_CLUB` = `128` — Blunt attacks such as from the Crowbar, Antlion Guard &amp; Hunter

---

- `DMG_SHOCK` = `256` — Electrical damage, shows smoke at the damage position and its used by Stalkers &amp; Vortigaunts

---

- `DMG_SONIC` = `512` — Sonic damage, used by the Gargantua and Houndeye NPCs

---

- `DMG_ENERGYBEAM` = `1024` — Laser damage

---

- `DMG_PREVENT_PHYSICS_FORCE` = `2048` — Prevent a physics force.

---

- `DMG_NEVERGIB` = `4096` — Crossbow damage, never creates gibs.

---

- `DMG_ALWAYSGIB` = `8192` — Always create gibs

---

- `DMG_DROWN` = `16384` — Drown damage

---

- `DMG_PARALYZE` = `32768` — Same as DMG_POISON

---

- `DMG_NERVEGAS` = `65536` — Neurotoxin damage

---

- `DMG_POISON` = `131072` — Poison damage used by Antlion Workers &amp; Poison Headcrabs.

---

- `DMG_RADIATION` = `262144` — Radiation damage &amp; it will be ignored by most vehicle passengers

---

- `DMG_DROWNRECOVER` = `524288` — Damage applied to the player to restore health after drowning

---

- `DMG_ACID` = `1048576` — Toxic chemical or acid burn damage used by the Antlion Workers

---

- `DMG_SLOWBURN` = `2097152` — In an oven

---

- `DMG_REMOVENORAGDOLL` = `4194304` — Don't create a ragdoll on death

---

- `DMG_PHYSGUN` = `8388608` — Damage done by the gravity gun.

---

- `DMG_PLASMA` = `16777216` — Plasma damage

---

- `DMG_AIRBOAT` = `33554432` — Airboat gun damage

---

- `DMG_DISSOLVE` = `67108864` — Forces the entity to dissolve on death. This is what the combine ball uses when it hits a target.

---

- `DMG_BLAST_SURFACE` = `134217728` — This won't hurt the player underwater

---

- `DMG_DIRECT` = `268435456` — Direct damage to the entity that does not go through any damage value modifications

---

- `DMG_BUCKSHOT` = `536870912` — The pellets fired from a shotgun

---

- `DMG_SNIPER` = `1073741824` — Damage from SniperRound/SniperPenetratedRound ammo types

---

- `DMG_MISSILEDEFENSE` = `2147483648` — Damage from npc_missiledefense, npc_combinegunship, or monster_mortar

---

## `DOCK` `[client/menu]`

---

Enumerations used by Panel:Dock.
These enumerations doesn't have DOCK_ prefix, this is an exception from all other enumerations.

---

- `NODOCK` = `0` — Don't dock

---

- `FILL` = `1` — Fill parent

---

- `LEFT` = `2` — Dock to the left

---

- `RIGHT` = `3` — Dock to the right

---

- `TOP` = `4` — Dock to the top

---

- `BOTTOM` = `5` — Dock to the bottom

---

## `DOF` `[client]`

---

Internal globals for SimpleDoF.

---

- `DOF_OFFSET` = `256` — 

---

- `DOF_SPACING` = `512` — 

---

## `EF` `[client/server]`

---

Enumerations used by Entity:AddEffects,  Entity:RemoveEffects and  Entity:IsEffectActive.

---

- `EF_BONEMERGE` = `1` — Performs bone merge on client side, merging bone positions of child entities (Entity:SetParent) with those of the parent, by bone names. The skeletons should have identical proportions, however it is not a requirement.

---

- `EF_BONEMERGE_FASTCULL` = `128` — For use with EF_BONEMERGE. If this is set, then it places this ents origin at its parent and uses the parent's bbox + the max extents of the aiment. Otherwise, it sets up the parent's bones every frame to figure out where to place the aiment, which is inefficient because it'll setup the parent's bones even if the parent is not in the PVS.

---

- `EF_BRIGHTLIGHT` = `2` — DLIGHT centered at entity origin.

---

- `EF_DIMLIGHT` = `4` — Player flashlight.

---

- `EF_NOINTERP` = `8` — Seems to have no effect. Has been replaced with [C_BaseEntity::IsNoInterpolationFrame()](https://github.com/ValveSoftware/source-sdk-2013/blob/master/src/game/client/c_baseentity.h#L1331-L1332).Don't interpolate the next frame.

---

- `EF_NOSHADOW` = `16` — Disables shadow.

---

- `EF_NODRAW` = `32` — Prevents the entity from drawing and networking.

---

- `EF_NORECEIVESHADOW` = `64` — Don't receive shadows.

---

- `EF_ITEM_BLINK` = `256` — Makes the entity blink.

---

- `EF_PARENT_ANIMATES` = `512` — Always assume that the parent entity is animating.

---

- `EF_FOLLOWBONE` = `1024` — Internal flag that is set by Entity:FollowBone.

---

- `EF_NOFLASHLIGHT` = `8192` — GMod-specific. Makes the entity not accept being lit by projected textures, including the player's flashlight.

---

## `EFL` `[client/server]`

---

Enumerations used by Entity:AddEFlags, Entity:RemoveEFlags and Entity:IsEFlagSet.

---

- `EFL_KILLME` = `1` — This entity is marked for death -- This allows the game to actually delete ents at a safe time.
You should never set this flag manually.

---

- `EFL_DORMANT` = `2` — Entity is dormant, no updates to client

---

- `EFL_NOCLIP_ACTIVE` = `4` — Lets us know when the noclip command is active

---

- `EFL_SETTING_UP_BONES` = `8` — Set while a model is setting up its bones

---

- `EFL_KEEP_ON_RECREATE_ENTITIES` = `16` — This is a special entity that should not be deleted when we respawn entities via game.CleanUpMap.

---

- `EFL_HAS_PLAYER_CHILD` = `16` — One of the child entities is a player

---

- `EFL_DIRTY_SHADOWUPDATE` = `32` — (Client only) need shadow manager to update the shadow

---

- `EFL_NOTIFY` = `64` — Another entity is watching events on this entity (used by teleport)

---

- `EFL_FORCE_CHECK_TRANSMIT` = `128` — The default behavior in ShouldTransmit is to not send an entity if it doesn't have a model. Certain entities want to be sent anyway because all the drawing logic is in the client DLL. They can set this flag and the engine will transmit them even if they don't have model

---

- `EFL_BOT_FROZEN` = `256` — This is set on bots that are frozen

---

- `EFL_SERVER_ONLY` = `512` — Non-networked entity

---

- `EFL_NO_AUTO_EDICT_ATTACH` = `1024` — Don't attach the edict

---

- `EFL_DIRTY_ABSTRANSFORM` = `2048` — Some 'dirty' bits with respect to absolute computations. Used internally by the engine when an entity's absolute position needs to be recalculated.

---

- `EFL_DIRTY_ABSVELOCITY` = `4096` — Some 'dirty' bits with respect to absolute computations. Used internally by the engine when an entity's absolute velocity needs to be recalculated.

---

- `EFL_DIRTY_ABSANGVELOCITY` = `8192` — Some 'dirty' bits with respect to absolute computations. Used internally by the engine when an entity's absolute angular velocity needs to be recalculated.

---

- `EFL_DIRTY_SURROUNDING_COLLISION_BOUNDS` = `16384` — Marks the entity as having a 'dirty' surrounding box. Used internally by the engine to recompute the entity's collision bounds.

---

- `EFL_DIRTY_SPATIAL_PARTITION` = `32768` — Used internally by the engine when an entity's "spatial partition" needs to be recalculated.

---

- `EFL_IN_SKYBOX` = `131072` — This is set if the entity detects that it's in the skybox. This forces it to pass the "in PVS" for transmission

---

- `EFL_USE_PARTITION_WHEN_NOT_SOLID` = `262144` — Entities with this flag set show up in the partition even when not solid

---

- `EFL_TOUCHING_FLUID` = `524288` — Used to determine if an entity is floating

---

- `EFL_IS_BEING_LIFTED_BY_BARNACLE` = `1048576` — The entity is currently being lifted by a Barnacle.

---

- `EFL_NO_ROTORWASH_PUSH` = `2097152` — The entity is not affected by 'rotorwash push'--the wind-push effect caused by helicopters close to the ground in Half-Life 2.

---

- `EFL_NO_THINK_FUNCTION` = `4194304` — Avoid executing the entity's Think

---

- `EFL_NO_GAME_PHYSICS_SIMULATION` = `8388608` — The entity is currently not simulating any physics.

---

- `EFL_CHECK_UNTOUCH` = `16777216` — The entity is about to have its untouch callback checked, e.g. when this entity stops touching another entity.

---

- `EFL_DONTBLOCKLOS` = `33554432` — Entity shouldn't block NPC line-of-sight

---

- `EFL_DONTWALKON` = `67108864` — NPCs should not walk on this entity

---

- `EFL_NO_DISSOLVE` = `134217728` — The entity shouldn't dissolve

---

- `EFL_NO_MEGAPHYSCANNON_RAGDOLL` = `268435456` — Mega physcannon can't ragdoll these guys

---

- `EFL_NO_WATER_VELOCITY_CHANGE` = `536870912` — Don't adjust this entity's velocity when transitioning into water

---

- `EFL_NO_PHYSCANNON_INTERACTION` = `1073741824` — Physcannon can't pick these up or punt them

---

- `EFL_NO_DAMAGE_FORCES` = `-2147483648` — Doesn't accept forces from physics damage

---

## `FCVAR` `[client/menu/server]`

---

Enumerations used by Global.AddConsoleCommand, concommand.Add, Global.CreateClientConVar and Global.CreateConVar.

---

- `FCVAR_ARCHIVE` = `128` — Save the ConVar value into either client.vdf or server.vdf

Reported as "a" by `cvarlist`, except Lua ConVars

---

- `FCVAR_ARCHIVE_XBOX` = `16777216` — Save the ConVar value into config.vdf on XBox

---

- `FCVAR_CHEAT` = `16384` — Requires `sv_cheats` to be enabled to change the ConVar or run the command

Reported as "cheat" by `cvarlist`

---

- `FCVAR_CLIENTCMD_CAN_EXECUTE` = `1073741824` — `IVEngineClient::ClientCmd` is allowed to execute this command

Reported as "clientcmd_can_execute" by `cvarlist`

---

- `FCVAR_CLIENTDLL` = `8` — ConVar is defined by the client DLL.

This flag is set automatically

Reported as "cl" by `cvarlist`

---

- `FCVAR_DEMO` = `65536` — Force the ConVar to be recorded by demo recordings.

Reported as "demo" by `cvarlist`

---

- `FCVAR_DONTRECORD` = `131072` — Opposite of [FCVAR_DEMO](#FCVAR_DEMO), ensures the ConVar is not recorded in demos

Reported as "norecord" by `cvarlist`

---

- `FCVAR_GAMEDLL` = `4` — ConVar is defined by the game DLL.

This flag is set automatically

Reported as "sv" by `cvarlist`

---

- `FCVAR_LUA_CLIENT` = `262144` — Set automatically on all ConVars and console commands created by the client Lua state.

Reported as "lua_client" by `cvarlist`

---

- `FCVAR_LUA_SERVER` = `524288` — Set automatically on all ConVars and console commands created by the server Lua state.

Reported as "lua_server" by `cvarlist`

---

- `FCVAR_NEVER_AS_STRING` = `4096` — Tells the engine to never print this variable as a string. This is used for variables which may contain control characters.

Reported as "numeric" by `cvarlist`

---

- `FCVAR_NONE` = `0` — No flags

---

- `FCVAR_NOTIFY` = `256` — For serverside ConVars, notifies all players with blue chat text when the value gets changed, also makes the convar appear in [A2S_RULES](https://developer.valvesoftware.com/wiki/Server_queries#A2S_RULES)

Reported as "nf" by `cvarlist`

---

- `FCVAR_NOT_CONNECTED` = `4194304` — Makes the ConVar not changeable while connected to a server or in singleplayer

---

- `FCVAR_PRINTABLEONLY` = `1024` — Forces the ConVar to only have printable characters (No control characters)

Reported as "print" by `cvarlist`

---

- `FCVAR_PROTECTED` = `32` — Makes the ConVar value hidden from all clients (For example `sv_password`)

Reported as "prot" by `cvarlist`

---

- `FCVAR_REPLICATED` = `8192` — For serverside ConVars, it will enforce its value on all clients. The ConVar with the same name must also exist on the client!

Reported as "rep" by `cvarlist`

---

- `FCVAR_SERVER_CANNOT_QUERY` = `536870912` — Prevents the server from querying value of this ConVar

---

- `FCVAR_SERVER_CAN_EXECUTE` = `268435456` — The server is allowed to execute this command on clients.

Reported as "server_can_execute" by `cvarlist`

---

- `FCVAR_SPONLY` = `64` — Executing the command or changing the ConVar is only allowed in singleplayer

Reported as "sp" by `cvarlist`

---

- `FCVAR_UNLOGGED` = `2048` — Don't log the ConVar changes to console/log files/users

Reported as "log" by `cvarlist`

---

- `FCVAR_UNREGISTERED` = `1` — If this is set, the convar will become anonymous and won't show up in the `find` results.

---

- `FCVAR_USERINFO` = `512` — For clientside commands, sends the value to the server

Reported as "user" by `cvarlist`

---

## `FFT` `[client]`

---

Enumerations used by IGModAudioChannel:FFT. Clientside only.

---

- `FFT_256` = `0` — 128 levels

---

- `FFT_512` = `1` — 256 levels

---

- `FFT_1024` = `2` — 512 levels

---

- `FFT_2048` = `3` — 1024 levels

---

- `FFT_4096` = `4` — 2048 levels

---

- `FFT_8192` = `5` — 4096 levels

---

- `FFT_16384` = `6` — 8192 levels

---

- `FFT_32768` = `7` — 16384 levels

---

## `FL` `[client/server]`

---

Enumerations used by Entity:AddFlags, Entity:RemoveFlags and Entity:IsFlagSet.

---

- `FL_ONGROUND` = `1` — Is the entity on ground or not

---

- `FL_DUCKING` = `2` — Is player ducking or not

---

- `FL_ANIMDUCKING` = `4` — Is the player in the process of ducking or standing up

---

- `FL_WATERJUMP` = `8` — The player is jumping out of water

---

- `FL_ONTRAIN` = `16` — This player is controlling a func_train

---

- `FL_INRAIN` = `32` — Indicates the entity is standing in rain

---

- `FL_FROZEN` = `64` — Completely freezes the player
Bots will still be able to look around.

---

- `FL_ATCONTROLS` = `128` — This player is controlling something UI related in the world, this prevents his movement, but doesn't freeze mouse movement, jumping, etc.

---

- `FL_CLIENT` = `256` — Is this entity a player or not

---

- `FL_FAKECLIENT` = `512` — Bots have this flag

---

- `FL_INWATER` = `1024` — Is the player in water or not

---

- `FL_FLY` = `2048` — This entity can fly

---

- `FL_SWIM` = `4096` — This entity can swim

---

- `FL_CONVEYOR` = `8192` — This entity is a func_conveyor

---

- `FL_NPC` = `16384` — NPCs have this flag (NPC: Ignore player push)

---

- `FL_GODMODE` = `32768` — Whether the player has god mode enabled

---

- `FL_NOTARGET` = `65536` — Makes the entity invisible to AI

---

- `FL_AIMTARGET` = `131072` — This entity can be aimed at

---

- `FL_PARTIALGROUND` = `262144` — Not all corners are valid

---

- `FL_STATICPROP` = `524288` — It's a static prop

---

- `FL_GRAPHED` = `1048576` — worldgraph has this ent listed as something that blocks a connection

---

- `FL_GRENADE` = `2097152` — This entity is a grenade, unused

---

- `FL_STEPMOVEMENT` = `4194304` — Changes the SV_Movestep() behavior to not do any processing

---

- `FL_DONTTOUCH` = `8388608` — Doesn't generate touch functions, calls ENTITY:EndTouch when this flag gets set during a touch callback

---

- `FL_BASEVELOCITY` = `16777216` — Base velocity has been applied this frame (used to convert base velocity into momentum)

---

- `FL_WORLDBRUSH` = `33554432` — This entity is a brush and part of the world

---

- `FL_OBJECT` = `67108864` — This entity can be seen by NPCs

---

- `FL_KILLME` = `134217728` — This entity is about to get removed

---

- `FL_ONFIRE` = `268435456` — This entity is on fire

---

- `FL_DISSOLVING` = `536870912` — The entity is currently dissolving

---

- `FL_TRANSRAGDOLL` = `1073741824` — This entity is about to become a ragdoll

---

- `FL_UNBLOCKABLE_BY_PLAYER` = `-2147483648` — This moving door can't be blocked by the player

---

## `FORCE` `[client/menu/server]`

---

Enumerations used by Global.AccessorFunc.

---

- `FORCE_STRING` = `1` — Forces the function to take strings only

---

- `FORCE_NUMBER` = `2` — Forces the function to take numbers only

---

- `FORCE_BOOL` = `3` — Forces the function to take booleans only

---

- `FORCE_ANGLE` = `4` — Forces the function to take Angles only

---

- `FORCE_COLOR` = `5` — Forces the function to take Colors only

---

- `FORCE_VECTOR` = `6` — Forces the function to take Vectors only

---

## `FSASYNC` `[client/server]`

---

Used by file.AsyncRead.

---

- `FSASYNC_ERR_NOT_MINE` = `-8` — 

---

- `FSASYNC_ERR_RETRY_LATER` = `-7` — 

---

- `FSASYNC_ERR_ALIGNMENT` = `-6` — 

---

- `FSASYNC_ERR_FAILURE` = `-5` — 

---

- `FSASYNC_ERR_READING` = `-4` — 

---

- `FSASYNC_ERR_NOMEMORY` = `-3` — 

---

- `FSASYNC_ERR_UNKNOWNID` = `-2` — 

---

- `FSASYNC_ERR_FILEOPEN` = `-1` — 

---

- `FSASYNC_OK` = `0` — 

---

- `FSASYNC_STATUS_PENDING` = `1` — 

---

- `FSASYNC_STATUS_INPROGRESS` = `2` — 

---

- `FSASYNC_STATUS_ABORTED` = `3` — 

---

- `FSASYNC_STATUS_UNSERVICED` = `4` — 

---

## `FSOLID` `[client/server]`

---

Enumerations used by Entity:SetSolidFlags and Entity:GetSolidFlags.

---

- `FSOLID_CUSTOMRAYTEST` = `1` — Ignore solid type + always call into the entity for ray tests

---

- `FSOLID_CUSTOMBOXTEST` = `2` — Ignore solid type + always call into the entity for swept box tests

---

- `FSOLID_NOT_SOLID` = `4` — The object is currently not solid

---

- `FSOLID_TRIGGER` = `8` — This is something may be collideable but fires touch functions even when it's not collideable (when the FSOLID_NOT_SOLID flag is set)

---

- `FSOLID_NOT_STANDABLE` = `16` — The player can't stand on this

---

- `FSOLID_VOLUME_CONTENTS` = `32` — Contains volumetric contents (like water)

---

- `FSOLID_FORCE_WORLD_ALIGNED` = `64` — Forces the collision representation to be world-aligned even if it's SOLID_BSP or SOLID_VPHYSICS

---

- `FSOLID_USE_TRIGGER_BOUNDS` = `128` — Uses a special trigger bounds separate from the normal OBB

---

- `FSOLID_ROOT_PARENT_ALIGNED` = `256` — Collisions are defined in root parent's local coordinate space

---

- `FSOLID_TRIGGER_TOUCH_DEBRIS` = `512` — This trigger will touch debris objects

---

- `FSOLID_MAX_BITS` = `10` — The amount of bits needed to store the all the flags in a variable/sent over network.

---

## `FVPHYSICS` `[client/server]`

---

Enumerations used by PhysObj:AddGameFlag, PhysObj:HasGameFlag and PhysObj:ClearGameFlag.

---

- `FVPHYSICS_CONSTRAINT_STATIC` = `2` — Won't receive physics forces from collisions and won't collide with other PhysObj with the same flag set.

---

- `FVPHYSICS_DMG_DISSOLVE` = `512` — Colliding with entities will cause 1000 damage with DMG_DISSOLVE as the damage type, but only if EFL_NO_DISSOLVE is not set.

---

- `FVPHYSICS_DMG_SLICE` = `1` — Does slice damage, not just blunt damage.

---

- `FVPHYSICS_HEAVY_OBJECT` = `32` — Will deal high physics damage even with a small mass.

---

- `FVPHYSICS_MULTIOBJECT_ENTITY` = `16` — This PhysObj is part of an entity with multiple PhysObj , such as a ragdoll or a vehicle , and will be considered during collision damage events.

---

- `FVPHYSICS_NO_IMPACT_DMG` = `1024` — Colliding with entities won't cause physics damage.

---

- `FVPHYSICS_NO_NPC_IMPACT_DMG` = `2048` — Like FVPHYSICS_NO_IMPACT_DMG, but only checks for NPCs. Usually set on Combine Balls fired by Combine Soldiers.

---

- `FVPHYSICS_NO_PLAYER_PICKUP` = `128` — Doesn't allow the player to pick this PhysObj with the Gravity Gun or +use pickup.

---

- `FVPHYSICS_NO_SELF_COLLISIONS` = `32768` — We won't collide with other PhysObj associated to the same entity, only used for vehicles and ragdolls held by the Super Gravity Gun.

---

- `FVPHYSICS_PART_OF_RAGDOLL` = `8` — This PhysObj is part of a ragdoll.

---

- `FVPHYSICS_PENETRATING` = `64` — Set by the physics engine when two PhysObj are penetrating each other. This is only automatically updated for non-static physics objects.

---

- `FVPHYSICS_PLAYER_HELD` = `4` — Set when the player is holding this PhysObj with the Physics Gun, Gravity Gun or +use pickup.

---

- `FVPHYSICS_WAS_THROWN` = `256` — This object was thrown by the Gravity Gun , stuns Antlion guards, Hunters, and squashes Antlion grubs.

---

## `GESTURE_SLOT` `[client/server]`

---

Enumerations used by Player:AddVCDSequenceToGestureSlot, Player:AnimResetGestureSlot and Player:AnimRestartGesture.

---

- `GESTURE_SLOT_ATTACK_AND_RELOAD` = `0` — Slot for weapon gestures

---

- `GESTURE_SLOT_GRENADE` = `1` — 

---

- `GESTURE_SLOT_JUMP` = `2` — Slot for jump gestures

---

- `GESTURE_SLOT_SWIM` = `3` — Slot for swimming gestures

---

- `GESTURE_SLOT_FLINCH` = `4` — Slot for flinching gestures

---

- `GESTURE_SLOT_VCD` = `5` — 

---

- `GESTURE_SLOT_CUSTOM` = `6` — Slot for custom gestures

---

## `GLOBAL` `[server]`

---

Enumerations used by game.SetGlobalState and game.GetGlobalState.

Serverside only.

---

- `GLOBAL_OFF` = `0` — Initial state, the global state is off.

---

- `GLOBAL_ON` = `1` — The global state is enabled.

---

- `GLOBAL_DEAD` = `2` — The global state is dead and is no longer active. It will be cleared.

---

## `GMOD_CHANNEL` `[client]`

---

Enumerations used by IGModAudioChannel:GetState. Clientside only.

---

- `GMOD_CHANNEL_STOPPED` = `0` — The channel is stopped

---

- `GMOD_CHANNEL_PLAYING` = `1` — The channel is playing

---

- `GMOD_CHANNEL_PAUSED` = `2` — The channel is paused

---

- `GMOD_CHANNEL_STALLED` = `3` — The channel is buffering

---

## `GOALTYPE` `[server]`

---

Used by NPC:GetCurGoalType.

These enumerations do not exist in game and are listed here only for reference

---

- `GOALTYPE_NONE` = `0` — No goal type.

---

- `GOALTYPE_TARGETENT` = `1` — The goal type is an entity.

---

- `GOALTYPE_ENEMY` = `2` — The goal type is the enemy entity.

---

- `GOALTYPE_PATHCORNER` = `3` — The goal type is a path corner.

---

- `GOALTYPE_LOCATION` = `4` — The goal type is a position.

---

- `GOALTYPE_LOCATION_NEAREST_NODE` = `5` — The goal type is a node nearest to a certain position.

---

- `GOALTYPE_FLANK` = `6` — Goal type is a flank location.

---

- `GOALTYPE_COVER` = `7` — Goal type is a cover spot.

---

- `GOALTYPE_INVALID` = `8` — Invalid goal type.

---

## `HITGROUP` `[client/server]`

---

Enumerations used by GM:ScalePlayerDamage and GM:ScaleNPCDamage and returned by Player:LastHitGroup.

---

- `HITGROUP_GENERIC` = `0` — 1:1 damage. Melee weapons and fall damage typically hit this hitgroup.
This hitgroup is not present on default player models.

It is unknown how this is generated in GM:ScalePlayerDamage, but it occurs when shot by NPCs ( npc_combine_s ) for example.

---

- `HITGROUP_HEAD` = `1` — Head

---

- `HITGROUP_CHEST` = `2` — Chest

---

- `HITGROUP_STOMACH` = `3` — Stomach

---

- `HITGROUP_LEFTARM` = `4` — Left arm

---

- `HITGROUP_RIGHTARM` = `5` — Right arm

---

- `HITGROUP_LEFTLEG` = `6` — Left leg

---

- `HITGROUP_RIGHTLEG` = `7` — Right leg

---

- `HITGROUP_GEAR` = `10` — Gear. Supposed to be belt area.

This hitgroup is not present on default player models.

Alerts NPC, but doesn't do damage or bleed (1/100th damage)

---

## `HUD` `[client/server]`

---

Enumerations used by Player:PrintMessage and Global.PrintMessage.

---

- `HUD_PRINTNOTIFY` = `1` — No longer works; now same as HUD_PRINTCONSOLE

---

- `HUD_PRINTCONSOLE` = `2` — Console

---

- `HUD_PRINTTALK` = `3` — Chat, also prints to console

---

- `HUD_PRINTCENTER` = `4` — Center of the screen, nothing on client

---

## `HULL` `[server]`

---

Enumerations used by NPC:SetHullType and  NPC:GetHullType. Serverside only.

---

- `HULL_HUMAN` = `0` — Hull of a Citizen

---

- `HULL_SMALL_CENTERED` = `1` — 

---

- `HULL_WIDE_HUMAN` = `2` — 

---

- `HULL_TINY` = `3` — 

---

- `HULL_WIDE_SHORT` = `4` — 

---

- `HULL_MEDIUM` = `5` — 

---

- `HULL_TINY_CENTERED` = `6` — 

---

- `HULL_LARGE` = `7` — 

---

- `HULL_LARGE_CENTERED` = `8` — 

---

- `HULL_MEDIUM_TALL` = `9` — 

---

## `IMAGE_FORMAT` `[client]`

---

Enumerations used by Global.GetRenderTargetEx to determine the byte format of each pixel in the render_rendertargets.

---

- `IMAGE_FORMAT_DEFAULT` = `-1` — 

---

- `IMAGE_FORMAT_RGBA8888` = `0` — Red, Green, Blue, Alpha, 8 bit per pixel.

---

- `IMAGE_FORMAT_ABGR8888` = `1` — Probably legacy format. Alpha, Red, Green, Blue, 8 bit per pixel.

---

- `IMAGE_FORMAT_RGB888` = `2` — Legacy format. Red, Green, Blue, 8 bit per pixel. `D3DFMT_R8G8B8` is invalid for most modern video cards. Thats why `IMAGE_FORMAT_RGB888` and `IMAGE_FORMAT_BGR888` is legacy formats. It have fallback to `IMAGE_FORMAT_BGRX8888`. `X` means «any».

---

- `IMAGE_FORMAT_BGR888` = `3` — Legacy format. Blue, Green, Red order, 8 bit per pixel.

---

- `IMAGE_FORMAT_RGB565` = `4` — Red, Green, Blue, 5 bit per pixel for Red and Blue channels, 6 bits for Green. Effectively uses less video memory.

---

- `IMAGE_FORMAT_ARGB8888` = `11` — `IMAGE_FORMAT_RGBA8888` with different byte order. Legacy format.

---

- `IMAGE_FORMAT_BGRA8888` = `12` — `IMAGE_FORMAT_RGBA8888` with different byte order. Legacy format.

---

- `IMAGE_FORMAT_RGBA16161616` = `25` — RGBA, but 16 bits per pixel. Was meant to be used for "Integer mode" for HDR.

---

- `IMAGE_FORMAT_RGBA16161616F` = `24` — RGBA, but floating point 16 bits per pixel. Is used for "Float mode" HDR.

---

## `IN` `[client/server]`

---

Unlike Enums/BUTTON_CODE, these enums are abstracted to allow the user to bind actions to any key they might prefer.

Keybinds using these actions work with two console commands, one starting with a plus and one with a minus symbol. A key press or release will call either the plus or minus command, adding or removing the corresponding enum in the current CUserCmd.

Enumerations used by:
* Player:KeyDown
* Player:KeyDownLast
* Player:KeyPressed
* Player:KeyReleased
* CMoveData:AddKey
* CMoveData:GetButtons
* CMoveData:GetOldButtons
* CMoveData:KeyDown
* CMoveData:KeyPressed
* CMoveData:KeyReleased
* CMoveData:KeyWasDown
* CMoveData:SetButtons
* CMoveData:SetOldButtons
* CUserCmd:GetButtons
* CUserCmd:KeyDown
* CUserCmd:RemoveKey
* CUserCmd:SetButtons
* GM:KeyPress
* GM:KeyRelease

---

- `IN_ATTACK` = `1` — +attack bound key ( Default: Left Mouse Button )

---

- `IN_JUMP` = `2` — +jump bound key ( Default: Space )

---

- `IN_DUCK` = `4` — +duck bound key ( Default: CTRL )

---

- `IN_FORWARD` = `8` — +forward bound key ( Default: W )

---

- `IN_BACK` = `16` — +back bound key ( Default: S )

---

- `IN_USE` = `32` — +use bound key ( Default: E )

---

- `IN_CANCEL` = `64` — 

---

- `IN_LEFT` = `128` — +left bound key ( Look left )

---

- `IN_RIGHT` = `256` — +right bound key ( Look right )

---

- `IN_MOVELEFT` = `512` — +moveleft bound key ( Default: A )

---

- `IN_MOVERIGHT` = `1024` — +moveright bound key ( Default: D )

---

- `IN_ATTACK2` = `2048` — +attack2 bound key ( Default: Right Mouse Button )

---

- `IN_RUN` = `4096` — 

---

- `IN_RELOAD` = `8192` — +reload bound key ( Default: R )

---

- `IN_ALT1` = `16384` — +alt1 bound key

---

- `IN_ALT2` = `32768` — +alt2 bound key

---

- `IN_SCORE` = `65536` — +showscores bound key ( Default: Tab )

---

- `IN_SPEED` = `131072` — +speed bound key ( Default: Shift )

---

- `IN_WALK` = `262144` — +walk bound key ( Slow walk )

---

- `IN_ZOOM` = `524288` — +zoom bound key ( Suit Zoom )

---

- `IN_WEAPON1` = `1048576` — For use in weapons. Set in the physgun when scrolling an object away from you.

---

- `IN_WEAPON2` = `2097152` — For use in weapons. Set in the physgun when scrolling an object towards you.

---

- `IN_BULLRUSH` = `4194304` — 

---

- `IN_GRENADE1` = `8388608` — +grenade1 bound key

---

- `IN_GRENADE2` = `16777216` — +grenade2 bound key

---

## `JOYSTICK` `[client/menu/server]`

---

Enumerations used by input.IsButtonDown.

It's also part of the Enums/BUTTON_CODE.

---

- `JOYSTICK_FIRST` = `114` — 

---

- `JOYSTICK_FIRST_BUTTON` = `114` — Joystick buttons are in this range, but don't have individual enum names.

---

- `JOYSTICK_LAST_BUTTON` = `145` — 

---

- `JOYSTICK_FIRST_POV_BUTTON` = `146` — Joystick POV buttons are in this range, but don't have individual enum names.

---

- `JOYSTICK_LAST_POV_BUTTON` = `149` — 

---

- `JOYSTICK_FIRST_AXIS_BUTTON` = `150` — Joystick axis buttons are in this range, but don't have individual enum names.

---

- `JOYSTICK_LAST_AXIS_BUTTON` = `161` — 

---

- `JOYSTICK_LAST` = `161` — 

---

## `KEY` `[client/menu/server]`

---

Enumerations used by:
* input.IsKeyDown
* input.WasKeyPressed
* input.WasKeyReleased
* input.WasKeyTyped
* input.IsKeyTrapping
* input.GetKeyName
* input.LookupBinding
* PANEL:OnKeyCodePressed
* PANEL:OnKeyCodeReleased

It's also part of the Enums/BUTTON_CODE.

---

- `KEY_FIRST` = `0` — 

---

- `KEY_NONE` = `0` — 

---

- `KEY_0` = `1` — Normal number 0 key

---

- `KEY_1` = `2` — Normal number 1 key

---

- `KEY_2` = `3` — Normal number 2 key

---

- `KEY_3` = `4` — Normal number 3 key

---

- `KEY_4` = `5` — Normal number 4 key

---

- `KEY_5` = `6` — Normal number 5 key

---

- `KEY_6` = `7` — Normal number 6 key

---

- `KEY_7` = `8` — Normal number 7 key

---

- `KEY_8` = `9` — Normal number 8 key

---

- `KEY_9` = `10` — Normal number 9 key

---

- `KEY_A` = `11` — 

---

- `KEY_B` = `12` — 

---

- `KEY_C` = `13` — 

---

- `KEY_D` = `14` — 

---

- `KEY_E` = `15` — 

---

- `KEY_F` = `16` — 

---

- `KEY_G` = `17` — 

---

- `KEY_H` = `18` — 

---

- `KEY_I` = `19` — 

---

- `KEY_J` = `20` — 

---

- `KEY_K` = `21` — 

---

- `KEY_L` = `22` — 

---

- `KEY_M` = `23` — 

---

- `KEY_N` = `24` — 

---

- `KEY_O` = `25` — 

---

- `KEY_P` = `26` — 

---

- `KEY_Q` = `27` — 

---

- `KEY_R` = `28` — 

---

- `KEY_S` = `29` — 

---

- `KEY_T` = `30` — 

---

- `KEY_U` = `31` — 

---

- `KEY_V` = `32` — 

---

- `KEY_W` = `33` — 

---

- `KEY_X` = `34` — 

---

- `KEY_Y` = `35` — 

---

- `KEY_Z` = `36` — 

---

- `KEY_PAD_0` = `37` — Keypad number 0 key

---

- `KEY_PAD_1` = `38` — Keypad number 1 key

---

- `KEY_PAD_2` = `39` — Keypad number 2 key

---

- `KEY_PAD_3` = `40` — Keypad number 3 key

---

- `KEY_PAD_4` = `41` — Keypad number 4 key

---

- `KEY_PAD_5` = `42` — Keypad number 5 key

---

- `KEY_PAD_6` = `43` — Keypad number 6 key

---

- `KEY_PAD_7` = `44` — Keypad number 7 key

---

- `KEY_PAD_8` = `45` — Keypad number 8 key

---

- `KEY_PAD_9` = `46` — Keypad number 9 key

---

- `KEY_PAD_DIVIDE` = `47` — Keypad division/slash key (/)

---

- `KEY_PAD_MULTIPLY` = `48` — Keypad asterisk key (*)

---

- `KEY_PAD_MINUS` = `49` — Keypad minus key

---

- `KEY_PAD_PLUS` = `50` — Keypad plus key

---

- `KEY_PAD_ENTER` = `51` — Keypad enter key

---

- `KEY_PAD_DECIMAL` = `52` — Keypad dot key (.)

---

- `KEY_LBRACKET` = `53` — 

---

- `KEY_RBRACKET` = `54` — 

---

- `KEY_SEMICOLON` = `55` — 

---

- `KEY_APOSTROPHE` = `56` — 

---

- `KEY_BACKQUOTE` = `57` — 

---

- `KEY_COMMA` = `58` — 

---

- `KEY_PERIOD` = `59` — 

---

- `KEY_SLASH` = `60` — 

---

- `KEY_BACKSLASH` = `61` — 

---

- `KEY_MINUS` = `62` — 

---

- `KEY_EQUAL` = `63` — 

---

- `KEY_ENTER` = `64` — 

---

- `KEY_SPACE` = `65` — 

---

- `KEY_BACKSPACE` = `66` — 

---

- `KEY_TAB` = `67` — 

---

- `KEY_CAPSLOCK` = `68` — 

---

- `KEY_NUMLOCK` = `69` — 

---

- `KEY_ESCAPE` = `70` — 

---

- `KEY_SCROLLLOCK` = `71` — 

---

- `KEY_INSERT` = `72` — 

---

- `KEY_DELETE` = `73` — 

---

- `KEY_HOME` = `74` — 

---

- `KEY_END` = `75` — 

---

- `KEY_PAGEUP` = `76` — 

---

- `KEY_PAGEDOWN` = `77` — 

---

- `KEY_BREAK` = `78` — 

---

- `KEY_LSHIFT` = `79` — The left Shift key, has been seen to be triggered by Right Shift in PANEL:OnKeyCodePressed

---

- `KEY_RSHIFT` = `80` — 

---

- `KEY_LALT` = `81` — 

---

- `KEY_RALT` = `82` — 

---

- `KEY_LCONTROL` = `83` — 

---

- `KEY_RCONTROL` = `84` — 

---

- `KEY_LWIN` = `85` — The left Windows key or the Command key on Mac OSX

---

- `KEY_RWIN` = `86` — The right Windows key or the Command key on Mac OSX

---

- `KEY_APP` = `87` — 

---

- `KEY_UP` = `88` — 

---

- `KEY_LEFT` = `89` — 

---

- `KEY_DOWN` = `90` — 

---

- `KEY_RIGHT` = `91` — 

---

- `KEY_F1` = `92` — 

---

- `KEY_F2` = `93` — 

---

- `KEY_F3` = `94` — 

---

- `KEY_F4` = `95` — 

---

- `KEY_F5` = `96` — 

---

- `KEY_F6` = `97` — 

---

- `KEY_F7` = `98` — 

---

- `KEY_F8` = `99` — By default, it serves as bind "load quick", which loads the save by forcing the player to exit the server.

---

- `KEY_F9` = `100` — 

---

- `KEY_F10` = `101` — 

---

- `KEY_F11` = `102` — 

---

- `KEY_F12` = `103` — 

---

- `KEY_CAPSLOCKTOGGLE` = `104` — 

---

- `KEY_NUMLOCKTOGGLE` = `105` — 

---

- `KEY_LAST` = `106` — 

---

- `KEY_SCROLLLOCKTOGGLE` = `106` — 

---

- `KEY_COUNT` = `107` — 

---

- `KEY_XBUTTON_A` = `114` — 

---

- `KEY_XBUTTON_B` = `115` — 

---

- `KEY_XBUTTON_X` = `116` — 

---

- `KEY_XBUTTON_Y` = `117` — 

---

- `KEY_XBUTTON_LEFT_SHOULDER` = `118` — 

---

- `KEY_XBUTTON_RIGHT_SHOULDER` = `119` — 

---

- `KEY_XBUTTON_BACK` = `120` — 

---

- `KEY_XBUTTON_START` = `121` — 

---

- `KEY_XBUTTON_STICK1` = `122` — 

---

- `KEY_XBUTTON_STICK2` = `123` — 

---

- `KEY_XBUTTON_UP` = `146` — 

---

- `KEY_XBUTTON_RIGHT` = `147` — 

---

- `KEY_XBUTTON_DOWN` = `148` — 

---

- `KEY_XBUTTON_LEFT` = `149` — 

---

- `KEY_XSTICK1_RIGHT` = `150` — 

---

- `KEY_XSTICK1_LEFT` = `151` — 

---

- `KEY_XSTICK1_DOWN` = `152` — 

---

- `KEY_XSTICK1_UP` = `153` — 

---

- `KEY_XBUTTON_LTRIGGER` = `154` — 

---

- `KEY_XBUTTON_RTRIGGER` = `155` — 

---

- `KEY_XSTICK2_RIGHT` = `156` — 

---

- `KEY_XSTICK2_LEFT` = `157` — 

---

- `KEY_XSTICK2_DOWN` = `158` — 

---

- `KEY_XSTICK2_UP` = `159` — 

---

## `kRenderFx` `[client/server]`

---

Used by Entity:SetRenderFX and returned by Entity:GetRenderFX.

Most of these require alpha value of entitys color to be less than 255 to have any visible effect.

---

- `kRenderFxNone` = `0` — None. No change.

---

- `kRenderFxPulseSlow` = `1` — Slowly pulses the entitys transparency, +-15 to the current alpha.

---

- `kRenderFxPulseFast` = `2` — Quickly pulses the entitys transparency, +-15 to the current alpha.

---

- `kRenderFxPulseSlowWide` = `3` — Slowly pulses the entitys transparency, +-60 to the current alpha.

---

- `kRenderFxPulseFastWide` = `4` — Quickly pulses the entitys transparency, +-60 to the current alpha.

---

- `kRenderFxFadeSlow` = `5` — Slowly fades away the entity, making it completely invisible over 3 seconds.

Starts from whatever alpha the entity currently has set.

---

- `kRenderFxFadeFast` = `6` — Quickly fades away the entity, making it completely invisible.

Starts from whatever alpha the entity currently has set.

---

- `kRenderFxSolidSlow` = `7` — Slowly solidifies the entity, making it fully opaque.

Starts from whatever alpha the entity currently has set.

---

- `kRenderFxSolidFast` = `8` — Quickly solidifies the entity, making it fully opaque.

Starts from whatever alpha the entity currently has set.

---

- `kRenderFxStrobeSlow` = `9` — Slowly switches the entitys transparency between its alpha and 0.

---

- `kRenderFxStrobeFast` = `10` — Quickly switches the entitys transparency between its alpha and 0.

---

- `kRenderFxStrobeFaster` = `11` — Very quickly switches the entitys transparency between its alpha and 0.

---

- `kRenderFxFlickerSlow` = `12` — Same as Strobe Slow, but the interval is more randomized.

---

- `kRenderFxFlickerFast` = `13` — Same as Strobe Fast, but the interval is more randomized.

---

- `kRenderFxNoDissipation` = `14` — 

---

- `kRenderFxDistort` = `15` — Flickers ( randomizes ) the entitys transparency

---

- `kRenderFxHologram` = `16` — Same as Distort, but fades the entity away the farther you are from it.

---

- `kRenderFxExplode` = `17` — 

---

- `kRenderFxGlowShell` = `18` — 

---

- `kRenderFxClampMinScale` = `19` — 

---

- `kRenderFxEnvRain` = `20` — 

---

- `kRenderFxEnvSnow` = `21` — 

---

- `kRenderFxSpotlight` = `22` — 

---

- `kRenderFxRagdoll` = `23` — Is ragdoll, can be set to force an entity to create a clientside ragdoll.

---

- `kRenderFxPulseFastWider` = `24` — Quickly pulses the entitys transparency, from 0 to 255.

---

## `MASK` `[client/server]`

---

Enumerations used as trace masks in Structures/Trace and Structures/HullTrace. These enumerations are simply combinations of Enums/CONTENTS.

---

- `MASK_ALL` = `4294967295` — Anything that is not empty space

---

- `MASK_BLOCKLOS` = `16449` — Anything that blocks line of sight for AI

---

- `MASK_BLOCKLOS_AND_NPCS` = `33570881` — Anything that blocks line of sight for AI or NPCs

---

- `MASK_CURRENT` = `16515072` — Water that is moving (may not work)

---

- `MASK_DEADSOLID` = `65547` — Anything that blocks corpse movement

---

- `MASK_NPCSOLID` = `33701899` — Anything that blocks NPC movement

---

- `MASK_NPCSOLID_BRUSHONLY` = `147467` — Anything that blocks NPC movement, except other NPCs

---

- `MASK_NPCWORLDSTATIC` = `131083` — The world entity

---

- `MASK_OPAQUE` = `16513` — Anything that blocks lighting

---

- `MASK_OPAQUE_AND_NPCS` = `33570945` — Anything that blocks lighting, including NPCs

---

- `MASK_PLAYERSOLID` = `33636363` — Anything that blocks player movement

---

- `MASK_PLAYERSOLID_BRUSHONLY` = `81931` — World + Brushes + Player Clips

---

- `MASK_SHOT` = `1174421507` — Anything that stops a bullet (including hitboxes)

---

- `MASK_SHOT_HULL` = `100679691` — Anything that stops a bullet (excluding hitboxes)

---

- `MASK_SHOT_PORTAL` = `33570819` — Solids except for grates

---

- `MASK_SOLID` = `33570827` — Anything that is (normally) solid

---

- `MASK_SOLID_BRUSHONLY` = `16395` — World + Brushes

---

- `MASK_SPLITAREAPORTAL` = `48` — Things that split area portals

---

- `MASK_VISIBLE` = `24705` — Anything that blocks line of sight for players

---

- `MASK_VISIBLE_AND_NPCS` = `33579137` — Anything that blocks line of sight for players, including NPCs

---

- `MASK_WATER` = `16432` — Anything that has water-like physics

---

## `MAT` `[client/server]`

---

Enumerations used in Structures/TraceResult and Structures/SurfacePropertyData, and by Entity:GetMaterialType.

These aren't IMaterial!

[Material types](https://developer.valvesoftware.com/wiki/Material_Types) are a [holdover from GoldSrc](https://developer.valvesoftware.com/wiki/Material_surface_properties) and Quake before it. They were previously used to classify textures and entities into categories, defining their physical properties. In practice, this really only changed impact sounds and effects, and player footstep sounds. For example, `func_breakable` (in GoldSrc) used it to select which gibs to spawn when broken. Raw texture files were given these properties by assigning them to a material. These were tracked in the single file `materials.txt`, which contained mappings of material types to texture names. Materials are indexed using a letter—for example `MAT_METAL` was indexed in `materials.txt` with the letter "M". The value of `MAT_METAL` is 77, because the ASCII value for M is 77. Some entities could also be assigned materials directly in their Entity:GetSaveTable using the same system.

In Source, materials were moved out of the single `materials.txt` file; now every texture has its own associated Materials_and_Textures file, called [VMT](https://developer.valvesoftware.com/wiki/VMT) (**V**alve **M**aterial **T**ype). VMTs contain all the information legacy materials used to provide and more, including including shader, transparency, physical properties, animations...

Rather than place the properties directly inside the VMT (which would prevent them from being assigned directly to entities like legacy materials could), Structures/SurfacePropertyData were added, which can be selected in the VMT using the `$surfaceprop` key. Surface properties are what determine impact sounds, buoyancy, friction, and other such properties. These do not use letters as identifiers and instead use util.GetSurfaceIndex. You can view the surface properties Garry's Mod loads by looking in the [`GarrysMod/sourceengine/scripts/surfaceproperties.txt`](https://github.com/Facepunch/garrysmod/blob/master/garrysmod/scripts/surfaceproperties.txt) file.

However, legacy materials still exist in Source. They are called game materials or Entity:GetMaterialType to separate them from the new material system where confusion between the two is a concern. For example, surface property definitions contain a `gamematerial` parameter; this field assigns a legacy game material to a surface property, which is then assigned to VMTs and entities.

The main thing legacy game materials are used for nowadays are picking impact effects and decals, like in GoldSrc. Otherwise, surface properties and VMTs replace most other functionality.

---

- `MAT_ANTLION` = `65` — Antlions

---

- `MAT_BLOODYFLESH` = `66` — Similar to MAT_FLESH, only used by "bloodyflesh" surface property, has different impact sound

---

- `MAT_CONCRETE` = `67` — Concrete

---

- `MAT_DIRT` = `68` — Dirt

---

- `MAT_EGGSHELL` = `69` — The egg sacs in the antlion tunnels in HL2: EP2

---

- `MAT_FLESH` = `70` — Flesh

---

- `MAT_GRATE` = `71` — Grates, chainlink fences

---

- `MAT_ALIENFLESH` = `72` — Alien flesh - headcrabs and vortigaunts

---

- `MAT_CLIP` = `73` — Unused

---

- `MAT_SNOW` = `74` — Snow

---

- `MAT_PLASTIC` = `76` — Plastic

---

- `MAT_METAL` = `77` — Metal

---

- `MAT_SAND` = `78` — Sand

---

- `MAT_FOLIAGE` = `79` — Plants, only used by the "foliage" surface property

---

- `MAT_COMPUTER` = `80` — Electronics, only used by "computer" surface property

---

- `MAT_SLOSH` = `83` — Water, slime

---

- `MAT_TILE` = `84` — Floor tiles

---

- `MAT_GRASS` = `85` — Grass

---

- `MAT_VENT` = `86` — Metallic vents

---

- `MAT_WOOD` = `87` — Wood

---

- `MAT_DEFAULT` = `88` — Skybox or nodraw texture

---

- `MAT_GLASS` = `89` — Glass

---

- `MAT_WARPSHIELD` = `90` — "wierd-looking jello effect for advisor shield."

---

## `MATERIAL` `[client]`

---

Enumerations used by mesh.Begin to control what type of vertex information it should expect. Clientside only.

For more information, see the mesh_primitives reference page.

---

- `MATERIAL_POINTS` = `0` — The primitive type `MATERIAL_POINTS` does not currently work and will not produce any visual effect if used.

For more information, see mesh_primitives#points

---

- `MATERIAL_LINES` = `1` — Creates line using 2 vertices.

The `primitiveCount` argument of mesh.Begin should be the total number of line multiply by 2 that the Mesh will contain.
E.g. `(vertexCount * 2)`

For more information, see mesh_primitives#lines

---

- `MATERIAL_TRIANGLES` = `2` — Creates triangles from groupings of 3 vertices.

The `primitiveCount` argument of mesh.Begin should be the total number of triangles that the Mesh will contain.
E.g. `(vertexCount / 3)`

For more information, see mesh_primitives#triangles

---

- `MATERIAL_TRIANGLE_STRIP` = `3` — Creates a set of triangles that each share two vertices with the previous triangle in the sequence.

The `primitiveCount` argument of mesh.Begin should be the total number of triangles that the Mesh will contain.
E.g. `(vertexCount - 2)`

For more information, see mesh_primitives#trianglestrips

---

- `MATERIAL_LINE_STRIP` = `4` — Creates a set of lines that all share a single vertex and each share a vertex with the previous lines.

The `primitiveCount` argument of mesh.Begin should be the total number of line connection that the Mesh will contain.
E.g. `(vertexCount)`

For more information, see mesh_primitives#linestrips

---

- `MATERIAL_LINE_LOOP` = `5` — Exactly like MATERIAL_LINE_STRIP do, but the first and the last vertex will always be connected together.

For more information, see mesh_primitives#lineloops

---

- `MATERIAL_POLYGON` = `6` — Creates a set of triangles that all share a single vertex and each share a vertex with the previous triangle.

The `primitiveCount` argument of mesh.Begin should be the total number of vertices that the Mesh will contain.
E.g. `(vertexCount)`

For more information, see mesh_primitives#polygons

---

- `MATERIAL_QUADS` = `7` — Creates pairs of triangles that share two vertices.

The `primitiveCount` argument of mesh.Begin should be the total number of quads that the Mesh will contain.
E.g. `(vertexCount / 4)`

For more information, see mesh_primitives#quads

---

## `MATERIAL_CULLMODE` `[client]`

---

Enumerations used by render.CullMode. Clientside only.

---

- `MATERIAL_CULLMODE_CCW` = `0` — Cull back faces with counterclockwise vertices.

---

- `MATERIAL_CULLMODE_CW` = `1` — Cull back faces with clockwise vertices.

---

- `MATERIAL_CULLMODE_NONE` = `2` — Do not cull back faces at all.

---

## `MATERIAL_FOG` `[client]`

---

Enumerations used by render.GetFogMode and render.FogMode. Clientside only.

---

- `MATERIAL_FOG_NONE` = `0` — No fog

---

- `MATERIAL_FOG_LINEAR` = `1` — Linear fog

---

- `MATERIAL_FOG_LINEAR_BELOW_FOG_Z` = `2` — For use in conjunction with render.SetFogZ. Does not work if start distance is bigger than end distance. Ignores density setting. Seems to be broken? Used for underwater fog by the engine.

---

## `MATERIAL_LIGHT` `[client]`

---

Enumerations used by render.SetLocalModelLights. Clientside only.

---

- `MATERIAL_LIGHT_DISABLE` = `0` — No light

---

- `MATERIAL_LIGHT_POINT` = `1` — Point light

---

- `MATERIAL_LIGHT_DIRECTIONAL` = `2` — Directional light

---

- `MATERIAL_LIGHT_SPOT` = `3` — Spot light

---

## `MATERIAL_RT_DEPTH` `[client]`

---

Enumerations used by Global.GetRenderTargetEx. Clientside only.
When Anti Aliasing is enabled then `MATERIAL_RT_DEPTH_SHARED` and `MATERIAL_RT_DEPTH_SEPARATE` will always create a new depth-stencil buffer because Render Targets do not have Anti Aliasing.

---

- `MATERIAL_RT_DEPTH_SHARED` = `0` — Do not create a depth-stencil buffer.Use the default depth-stencil buffer if used as render target 0.

---

- `MATERIAL_RT_DEPTH_SEPARATE` = `1` — Create a depth-stencil buffer.Use the created depth-stencil buffer if used as render target 0.

---

- `MATERIAL_RT_DEPTH_NONE` = `2` — Do not create a depth-stencil buffer.Disable depth and stencil buffer usage if used as render target 0.

---

- `MATERIAL_RT_DEPTH_ONLY` = `3` — Create a depth-stencil buffer.Use the created depth-stencil buffer if used as render target 0.

Creates a color texture despite the name.
Seems to behave the same as MATERIAL_RT_DEPTH_SEPARATE.

---

## `MOUSE` `[client/menu/server]`

---

Enumerations used by:
* input.IsMouseDown
* input.WasMousePressed
* input.WasMouseDoublePressed

It's also part of the Enums/BUTTON_CODE.
# Catch mouse wheel
You can catch the mouse wheel's value by:
```
local testVal = 0
hook.Add("InputMouseApply", "testMouseWheel", function(cmd, x, y, ang)
testVal = testVal + cmd:GetMouseWheel() * 2 --any scale number you want to use
print(testVal)
end)
```

---

- `MOUSE_FIRST` = `107` — First mouse button

---

- `MOUSE_LEFT` = `107` — Left mouse button

---

- `MOUSE_RIGHT` = `108` — Right mouse button

---

- `MOUSE_MIDDLE` = `109` — Middle mouse button, aka the wheel press

---

- `MOUSE_4` = `110` — Mouse 4 button ( Sometimes, mouse wheel tilt left )

---

- `MOUSE_5` = `111` — Mouse 5 button ( Sometimes, mouse wheel tilt right )

---

- `MOUSE_WHEEL_UP` = `112` — Mouse wheel scroll up

---

- `MOUSE_WHEEL_DOWN` = `113` — Mouse wheel scroll down

---

- `MOUSE_LAST` = `113` — Last mouse button

---

- `MOUSE_COUNT` = `7` — Mouse button count

---

## `MOVECOLLIDE` `[client/server]`

---

Enumerations used by Entity:SetMoveCollide and Entity:GetMoveCollide.

---

- `MOVECOLLIDE_DEFAULT` = `0` — Default behavior

---

- `MOVECOLLIDE_FLY_BOUNCE` = `1` — Entity bounces, reflects, based on elasticity of surface and object - applies friction (adjust velocity)

---

- `MOVECOLLIDE_FLY_CUSTOM` = `2` — ENTITY:ResolveCustomFlyCollision will modify the velocity however it likes

---

- `MOVECOLLIDE_FLY_SLIDE` = `3` — Entity slides along surfaces (no bounce) - applies friciton (adjusts velocity)

---

- `MOVECOLLIDE_COUNT` = `4` — Number of different movecollides

---

## `MOVETYPE` `[client/server]`

---

Enumerations used by Entity:SetMoveType and Entity:GetMoveType.

---

- `MOVETYPE_NONE` = `0` — Don't move

---

- `MOVETYPE_ISOMETRIC` = `1` — For players, in TF2 commander view, etc

---

- `MOVETYPE_WALK` = `2` — Player only, moving on the ground

---

- `MOVETYPE_STEP` = `3` — Monster/NPC movement

---

- `MOVETYPE_FLY` = `4` — Fly, no gravity

---

- `MOVETYPE_FLYGRAVITY` = `5` — Fly, with gravity

---

- `MOVETYPE_VPHYSICS` = `6` — Physics movetype

---

- `MOVETYPE_PUSH` = `7` — Doesn't collide with the world, but does push and crush entities.
This is what is used by the engine for elevators, trains, doors, moving water, etc.

In order to work properly, the entity needs to have specific Save Values/Internal Variables set which tell it how long it should be moving for.

**Note:** This same process can be done for both position and angle.

1. You'll need to Entity:GetInternalVariable called `ltime`
2. Calculate how long (in seconds) the entity will be moving before it reaches its destination.
As a simple example, this can be done via `duration = distance / speed`
3. Entity:SetSaveValue for `m_flMoveDoneTime` to the value you retrieved for `ltime` plus the duration calculated in step 2.
Put more simply: `m_flMoveDoneTime = ltime + duration`
4. Set the entity's velocity to move it to the destination at the speed used in step 2.

Once the duration of the move has elapsed, the entity will stop moving.  If you have done your calculations correctly, it should stop exactly at the desired destination.

MOVETYPE_PUSH entities only move during Entity:Think so if you want smooth movement, you need to set Entity:NextThink to Global.CurTime, which instructs the entity to execute Entity:Think as quickly as possible.

---

- `MOVETYPE_NOCLIP` = `8` — Noclip

---

- `MOVETYPE_LADDER` = `9` — For players, when moving on a ladder

---

- `MOVETYPE_OBSERVER` = `10` — Spectator movetype. DO **NOT** use this to make player spectate

---

- `MOVETYPE_CUSTOM` = `11` — Custom movetype, can be applied to the player to prevent the default movement code from running, while still calling the related hooks

---

## `NAV` `[server]`

---

Used by NPC:SetNavType and NPC:GetNavType.

---

- `NAV_NONE` = `-1` — Error condition.

---

- `NAV_GROUND` = `0` — walk/run

---

- `NAV_JUMP` = `1` — jump/leap

---

- `NAV_FLY` = `2` — can fly, move all around

---

- `NAV_CLIMB` = `3` — climb ladders

---

## `NAV_MESH` `[server]`

---

Enumerations used by CNavArea:GetAttributes and CNavArea:HasAttributes.

---

- `NAV_MESH_INVALID` = `0` — The nav area is invalid.

---

- `NAV_MESH_CROUCH` = `1` — Must crouch to use this node/area

---

- `NAV_MESH_JUMP` = `2` — Must jump to traverse this area (only used during generation)

---

- `NAV_MESH_PRECISE` = `4` — Do not adjust for obstacles, just move along area

---

- `NAV_MESH_NO_JUMP` = `8` — Inhibit discontinuity jumping

---

- `NAV_MESH_STOP` = `16` — Must stop when entering this area

---

- `NAV_MESH_RUN` = `32` — Must run to traverse this area

---

- `NAV_MESH_WALK` = `64` — Must walk to traverse this area

---

- `NAV_MESH_AVOID` = `128` — Avoid this area unless alternatives are too dangerous

---

- `NAV_MESH_TRANSIENT` = `256` — Area may become blocked, and should be periodically checked

---

- `NAV_MESH_DONT_HIDE` = `512` — Area should not be considered for hiding spot generation

---

- `NAV_MESH_STAND` = `1024` — Bots hiding in this area should stand

---

- `NAV_MESH_NO_HOSTAGES` = `2048` — Hostages shouldn't use this area

---

- `NAV_MESH_STAIRS` = `4096` — This area represents stairs, do not attempt to climb or jump them - just walk up

---

- `NAV_MESH_NO_MERGE` = `8192` — Don't merge this area with adjacent areas

---

- `NAV_MESH_OBSTACLE_TOP` = `16384` — This nav area is the climb point on the tip of an obstacle

---

- `NAV_MESH_CLIFF` = `32768` — This nav area is adjacent to a drop of at least `CliffHeight` (300 hammer units). Unused by base game.

---

- `NAV_MESH_BLOCKED_LUA` = `65536` — Whether the area is blocked via CNavArea:MarkAsBlocked.

---

- `NAV_MESH_BLOCKED_PROPDOOR` = `268435456` — Whether the area has a `prop_door_rotating` that is blocking it (because the door is closed)

---

- `NAV_MESH_FUNC_COST` = `536870912` — Area has designer specified cost controlled by `func_nav_cost` entities

---

- `NAV_MESH_HAS_ELEVATOR` = `1073741824` — Area is in an elevator's path

---

- `NAV_MESH_NAV_BLOCKER` = `-2147483648` — Whether the area is blocked by a `func_nav_blocker` entity and is impassible.

---

## `NavCorner` `[server]`

---

Enumerations used by CNavArea methods.
These Enums correspond to each corner of a CNavArea

These enumerations do not exist in game and are listed here only for reference

---

- `NORTH_WEST` = `0` — North West Corner

---

- `NORTH_EAST` = `1` — North East Corner

---

- `SOUTH_EAST` = `2` — South East Corner

---

- `SOUTH_WEST` = `3` — South West Corner

---

- `NUM_CORNERS` = `4` — Represents all corners, only applicable to certain functions, such as CNavArea:PlaceOnGround.

---

## `NavDir` `[server]`

---

Enumerations used by CNavArea methods.
These Enums correspond to each side of a CNavArea

These enumerations do not exist in game and are listed here only for reference

---

- `NORTH` = `0` — North from given CNavArea

---

- `EAST` = `1` — East from given CNavArea

---

- `SOUTH` = `2` — South from given CNavArea

---

- `WEST` = `3` — West from given CNavArea

---

## `NavTraverseType` `[server]`

---

Enumerations used by CNavArea:GetParentHow.

These enumerations do not exist in game and are listed here only for reference

---

- `GO_NORTH` = `0` — 

---

- `GO_EAST` = `1` — 

---

- `GO_SOUTH` = `2` — 

---

- `GO_WEST` = `3` — 

---

- `GO_LADDER_UP` = `4` — 

---

- `GO_LADDER_DOWN` = `5` — 

---

- `GO_JUMP` = `6` — 

---

- `GO_ELEVATOR_UP` = `7` — 

---

- `GO_ELEVATOR_DOWN` = `8` — 

---

## `NOTIFY` `[client/menu]`

---

Enumerations used by notification.AddLegacy. Clientside only.

---

- `NOTIFY_GENERIC` = `0` — Generic notification

---

- `NOTIFY_ERROR` = `1` — Error notification

---

- `NOTIFY_UNDO` = `2` — Undo notification

---

- `NOTIFY_HINT` = `3` — Hint notification

---

- `NOTIFY_CLEANUP` = `4` — Cleanup notification

---

## `NPC_STATE` `[server]`

---

Enumerations used by NPC:SetNPCState. Serverside only.

---

- `NPC_STATE_INVALID` = `-1` — Invalid state

---

- `NPC_STATE_NONE` = `0` — NPC default state

---

- `NPC_STATE_IDLE` = `1` — NPC is idle

---

- `NPC_STATE_ALERT` = `2` — NPC is alert and searching for enemies

---

- `NPC_STATE_COMBAT` = `3` — NPC is in combat

---

- `NPC_STATE_SCRIPT` = `4` — NPC is executing scripted sequence

---

- `NPC_STATE_PLAYDEAD` = `5` — NPC is playing dead (used for expressions)

---

- `NPC_STATE_PRONE` = `6` — NPC is prone to death

---

- `NPC_STATE_DEAD` = `7` — NPC is dead

---

## `NUM` `[server]`

---

Various count enums.

---

- `NUM_AI_CLASSES` = `36` — Amount of Enums/CLASS. Used by Global.Add_NPC_Class.

---

- `NUM_HULLS` = `10` — Amount of Enums/HULL.

---

## `OBS_MODE` `[client/server]`

---

Enumerations used by Player:SetObserverMode, Player:GetObserverMode and Player:Spectate.

---

- `OBS_MODE_NONE` = `0` — Not spectating

---

- `OBS_MODE_DEATHCAM` = `1` — Camera doesn't move, but adjusts camera angles to follow the spectated target

---

- `OBS_MODE_FREEZECAM` = `2` — TF2-like freeze-cam, then acts like `OBS_MODE_FIXED`.

---

- `OBS_MODE_FIXED` = `3` — Same as OBS_MODE_CHASE, but you can't rotate the view

---

- `OBS_MODE_IN_EYE` = `4` — Spectate a specific player from first person view.

---

- `OBS_MODE_CHASE` = `5` — Chase cam, 3rd person cam, free rotation around the spectated target

---

- `OBS_MODE_ROAMING` = `6` — Free roam/noclip-alike. Does not work from GM:PlayerDeath

---

## `PATTACH` `[client/server]`

---

Enumerations used by Global.ParticleEffectAttach.

---

- `PATTACH_ABSORIGIN` = `0` — Particle spawns in entity's origin and does not follow it

---

- `PATTACH_ABSORIGIN_FOLLOW` = `1` — Particle attaches to entity's origin and follows the entity

---

- `PATTACH_CUSTOMORIGIN` = `2` — Create at a custom origin, but don't follow

---

- `PATTACH_POINT` = `3` — Particle attaches to passed to Global.ParticleEffectAttach attachment id, but does not follow the entity

---

- `PATTACH_POINT_FOLLOW` = `4` — Particle attaches to passed to Global.ParticleEffectAttach attachment id and follows the entity

---

- `PATTACH_WORLDORIGIN` = `5` — Particle spawns in the beginning of coordinates ( Vector( 0, 0, 0 ) ), used for control points that don't attach to an entity

---

## `PLAYER` `[client/server]`

---

Enumerations used by Entity:SetAnimation

---

- `PLAYER_IDLE` = `0` — 

---

- `PLAYER_WALK` = `1` — 

---

- `PLAYER_JUMP` = `2` — 

---

- `PLAYER_SUPERJUMP` = `3` — 

---

- `PLAYER_DIE` = `4` — 

---

- `PLAYER_ATTACK1` = `5` — Player attack according to current hold type, used in SWEPs

---

- `PLAYER_IN_VEHICLE` = `6` — 

---

- `PLAYER_RELOAD` = `7` — Player reload according to current hold type, used in SWEPs

---

- `PLAYER_START_AIMING` = `8` — 

---

- `PLAYER_LEAVE_AIMING` = `9` — 

---

## `PLAYERANIMEVENT` `[client/server]`

---

Used by GM:DoAnimationEvent and Player:DoCustomAnimEvent.

---

- `PLAYERANIMEVENT_ATTACK_PRIMARY` = `0` — Primary attack

---

- `PLAYERANIMEVENT_ATTACK_SECONDARY` = `1` — Secondary attack

---

- `PLAYERANIMEVENT_ATTACK_GRENADE` = `2` — Grenade throw

---

- `PLAYERANIMEVENT_RELOAD` = `3` — Reload

---

- `PLAYERANIMEVENT_RELOAD_LOOP` = `4` — Looping reload (single-reload shotguns)

---

- `PLAYERANIMEVENT_RELOAD_END` = `5` — Looping reload end

---

- `PLAYERANIMEVENT_JUMP` = `6` — Jump

---

- `PLAYERANIMEVENT_SWIM` = `7` — Swim

---

- `PLAYERANIMEVENT_DIE` = `8` — Die

---

- `PLAYERANIMEVENT_FLINCH_CHEST` = `9` — 

---

- `PLAYERANIMEVENT_FLINCH_HEAD` = `10` — 

---

- `PLAYERANIMEVENT_FLINCH_LEFTARM` = `11` — 

---

- `PLAYERANIMEVENT_FLINCH_RIGHTARM` = `12` — 

---

- `PLAYERANIMEVENT_FLINCH_LEFTLEG` = `13` — 

---

- `PLAYERANIMEVENT_FLINCH_RIGHTLEG` = `14` — 

---

- `PLAYERANIMEVENT_DOUBLEJUMP` = `15` — 

---

- `PLAYERANIMEVENT_CANCEL` = `16` — 

---

- `PLAYERANIMEVENT_SPAWN` = `17` — Spawn

---

- `PLAYERANIMEVENT_SNAP_YAW` = `18` — 

---

- `PLAYERANIMEVENT_CUSTOM` = `19` — Custom activity

---

- `PLAYERANIMEVENT_CUSTOM_GESTURE` = `20` — Play activity in gesture slot

---

- `PLAYERANIMEVENT_CUSTOM_SEQUENCE` = `21` — Play sequence

---

- `PLAYERANIMEVENT_CUSTOM_GESTURE_SEQUENCE` = `22` — Play sequence in gesture slot

---

- `PLAYERANIMEVENT_CANCEL_RELOAD` = `23` — Cancel reload animation

---

## `RENDERGROUP` `[client/server]`

---

Enumerations used by Global.ClientsideModel, `ENT.RenderGroup` in Structures/ENT and Entity:GetRenderGroup.

---

- `RENDERGROUP_STATIC_HUGE` = `0` — Huge static prop, possibly leftover from goldsrc

---

- `RENDERGROUP_OPAQUE_HUGE` = `1` — Huge opaque entity, possibly leftover from goldsrc

---

- `RENDERGROUP_STATIC` = `6` — Static props?

---

- `RENDERGROUP_OPAQUE` = `7` — For non transparent/solid entities.

For scripted entities, this will have ENTITY:Draw called

---

- `RENDERGROUP_TRANSLUCENT` = `8` — For translucent/transparent entities

For scripted entities, this will have ENTITY:DrawTranslucent called

---

- `RENDERGROUP_BOTH` = `9` — For both translucent/transparent and opaque/solid anim entities

For scripted entities, this will have both, ENTITY:Draw and ENTITY:DrawTranslucent called

---

- `RENDERGROUP_VIEWMODEL` = `10` — Solid weapon view models

---

- `RENDERGROUP_VIEWMODEL_TRANSLUCENT` = `11` — Transparent overlays etc

---

- `RENDERGROUP_OPAQUE_BRUSH` = `12` — For brush entities

---

- `RENDERGROUP_OTHER` = `13` — Unclassfied. Won't get drawn.

---

## `RENDERMODE` `[client/server]`

---

Enumerations used by Entity:SetRenderMode and Entity:GetRenderMode.

---

- `RENDERMODE_NORMAL` = `0` — Default render mode. Transparently has no effect.

---

- `RENDERMODE_TRANSCOLOR` = `1` — Supports transparency.

Use this to make alpha of Global.Color work for your entity. For players, it must be set for their active weapon aswell.

---

- `RENDERMODE_TRANSTEXTURE` = `2` — 

---

- `RENDERMODE_GLOW` = `3` — Intended for glowing sprites. Allows transparency, and forces the sprite or model to be rendered unlit.

The size of a sprite rendered with Glow is consistent with the screen size (unlike the alternative World Space Glow), making it appear larger at a distance, in comparison to the world.

The GlowProxySize keyvalue affects this Render Mode on sprites.

---

- `RENDERMODE_TRANSALPHA` = `4` — Enables Alphatesting. Legacy port from Goldsource. Obsolete in Source due to Alphatesting being handled in materials. Does not allow transparency.

---

- `RENDERMODE_TRANSADD` = `5` — Add the material's color values to the existing image, instead of performing a multiplication. Sprites will appear through world geometry and the sprite/model will always brighten the world. Allows transparency.

---

- `RENDERMODE_ENVIROMENTAL` = `6` — Causes the material to be not be drawn at all, similarly to Don't Render.

---

- `RENDERMODE_TRANSADDFRAMEBLEND` = `7` — Functions like Additive, but also blends between animation frames. Requires the material to have a functioning animating texture. Allows transparency.

---

- `RENDERMODE_TRANSALPHADD` = `8` — Functions similarly to Additive, except that the alpha channel controls the opacity of the sprite. An example of use is for dark sprites, with an example material being sprites/strider_blackball.vmt.

---

- `RENDERMODE_WORLDGLOW` = `9` — Functions similarly to Glow, with the exception that the size of the sprite is relative to the world rather than the screen.

The GlowProxySize keyvalue affects this Render Mode on sprites.

---

- `RENDERMODE_NONE` = `10` — The entity is still being drawn and networked albeit invisible, therefore not making this Render Mode ideal for performance reasons.

To completely avoid drawing and networking an entity, see EF_NODRAW.

---

## `RT_SIZE` `[client]`

---

Enumerations used by Global.GetRenderTargetEx. Clientside only.

---

- `RT_SIZE_NO_CHANGE` = `0` — Only allowed for render targets that don't want a depth buffer (because if they have a depth buffer, the render target must be less than or equal to the size of the framebuffer).

---

- `RT_SIZE_DEFAULT` = `1` — Don't play with the specified width and height other than making sure it fits in the framebuffer.

---

- `RT_SIZE_PICMIP` = `2` — Apply picmip to the render target's width and height.

---

- `RT_SIZE_HDR` = `3` — frame_buffer_width / 4

---

- `RT_SIZE_FULL_FRAME_BUFFER` = `4` — Same size as frame buffer, or next lower power of 2 if we can't do that.

---

- `RT_SIZE_OFFSCREEN` = `5` — Target of specified size, don't mess with dimensions

---

- `RT_SIZE_FULL_FRAME_BUFFER_ROUNDED_UP` = `6` — Same size as the frame buffer, rounded up if necessary for systems that can't do non-power of two textures.

---

- `RT_SIZE_REPLAY_SCREENSHOT` = `7` — Rounded down to power of 2, essentially

---

- `RT_SIZE_LITERAL` = `8` — Use the size passed in. Don't clamp it to the frame buffer size. Really.

---

- `RT_SIZE_LITERAL_PICMIP` = `9` — Use the size passed in, don't clamp to the frame buffer size, but do apply picmip restrictions.

---

## `SCHED` `[server]`

---

Enumerations for NPC schedules, used by ENTITY:StartEngineSchedule, ENTITY:TranslateSchedule and NPC:SetSchedule. Serverside only.

---

- `LAST_SHARED_SCHEDULE` = `88` — The schedule enum limit

---

- `SCHED_AISCRIPT` = `56` — Begins AI script based on NPC's `m_hCine` save value.

---

- `SCHED_ALERT_FACE` = `5` — Idle stance and face ideal yaw angles.

---

- `SCHED_ALERT_FACE_BESTSOUND` = `6` — 

---

- `SCHED_ALERT_REACT_TO_COMBAT_SOUND` = `7` — 

---

- `SCHED_ALERT_SCAN` = `8` — Rotate 180 degrees and back to check for enemies.

---

- `SCHED_ALERT_STAND` = `9` — Remain idle until an enemy is heard or found.

---

- `SCHED_ALERT_WALK` = `10` — Walk until an enemy is heard or found.

---

- `SCHED_AMBUSH` = `52` — Remain idle until provoked or an enemy is found.

---

- `SCHED_ARM_WEAPON` = `48` — Performs ACT_ARM.

---

- `SCHED_BACK_AWAY_FROM_ENEMY` = `24` — Back away from enemy. If not possible to back away then go behind enemy.

---

- `SCHED_BACK_AWAY_FROM_SAVE_POSITION` = `26` — Requires valid enemy, backs away from SaveValue: m_vSavePosition

---

- `SCHED_BIG_FLINCH` = `23` — Heavy damage was taken for the first time in a while.

---

- `SCHED_CHASE_ENEMY` = `17` — Begin chasing an enemy.

---

- `SCHED_CHASE_ENEMY_FAILED` = `18` — Failed to chase enemy.

---

- `SCHED_COMBAT_FACE` = `12` — Face current enemy.

---

- `SCHED_COMBAT_PATROL` = `75` — Will walk around patrolling an area until an enemy is found.

---

- `SCHED_COMBAT_STAND` = `15` — 

---

- `SCHED_COMBAT_SWEEP` = `13` — 

---

- `SCHED_COMBAT_WALK` = `16` — 

---

- `SCHED_COWER` = `40` — When not moving, will perform ACT_COWER.

---

- `SCHED_DIE` = `53` — Regular NPC death.

---

- `SCHED_DIE_RAGDOLL` = `54` — Plays NPC death sound (doesn't kill NPC).

---

- `SCHED_DISARM_WEAPON` = `49` — Holsters active weapon. (Only works with NPC's that can holster weapons)

---

- `SCHED_DROPSHIP_DUSTOFF` = `79` — 

---

- `SCHED_DUCK_DODGE` = `84` — Preform Ducking animation. (Only works with npc_alyx)

---

- `SCHED_ESTABLISH_LINE_OF_FIRE` = `35` — Search for a place to shoot current enemy.

---

- `SCHED_ESTABLISH_LINE_OF_FIRE_FALLBACK` = `36` — Fallback from an established line of fire.

---

- `SCHED_FAIL` = `81` — Failed doing current schedule.

---

- `SCHED_FAIL_ESTABLISH_LINE_OF_FIRE` = `38` — Failed to establish a line of fire.

---

- `SCHED_FAIL_NOSTOP` = `82` — 

---

- `SCHED_FAIL_TAKE_COVER` = `31` — Failed to take cover.

---

- `SCHED_FALL_TO_GROUND` = `78` — Fall to ground when in the air.

---

- `SCHED_FEAR_FACE` = `14` — Will express fear face. (Only works on NPCs with expressions)

---

- `SCHED_FLEE_FROM_BEST_SOUND` = `29` — 

---

- `SCHED_FLINCH_PHYSICS` = `80` — Plays ACT_FLINCH_PHYSICS.

---

- `SCHED_FORCED_GO` = `71` — Force walk to SaveValue: m_vecLastPosition (debug).

---

- `SCHED_FORCED_GO_RUN` = `72` — Force run to SaveValue: m_vecLastPosition (debug).

---

- `SCHED_GET_HEALTHKIT` = `66` — Pick up item if within a radius of 5 units.

---

- `SCHED_HIDE_AND_RELOAD` = `50` — Take cover and reload weapon.

---

- `SCHED_IDLE_STAND` = `1` — Idle stance

---

- `SCHED_IDLE_WALK` = `2` — Walk to position.

---

- `SCHED_IDLE_WANDER` = `3` — Walk to random position within a radius of 200 units.

---

- `SCHED_INTERACTION_MOVE_TO_PARTNER` = `85` — 

---

- `SCHED_INTERACTION_WAIT_FOR_PARTNER` = `86` — 

---

- `SCHED_INVESTIGATE_SOUND` = `11` — 

---

- `SCHED_MELEE_ATTACK1` = `41` — 

---

- `SCHED_MELEE_ATTACK2` = `42` — 

---

- `SCHED_MOVE_AWAY` = `68` — Move away from player.

---

- `SCHED_MOVE_AWAY_END` = `70` — Stop moving and continue enemy scan.

---

- `SCHED_MOVE_AWAY_FAIL` = `69` — Failed to move away; stop moving.

---

- `SCHED_MOVE_AWAY_FROM_ENEMY` = `25` — Move away from enemy while facing it and checking for new enemies.

---

- `SCHED_MOVE_TO_WEAPON_RANGE` = `34` — Move to the range the weapon is preferably used at.

---

- `SCHED_NEW_WEAPON` = `63` — Pick up a new weapon if within a radius of 5 units.

---

- `SCHED_NEW_WEAPON_CHEAT` = `64` — Fail safe: Create the weapon that the NPC went to pick up if it was removed during pick up schedule.

---

- `SCHED_NONE` = `0` — No schedule is being performed.

---

- `SCHED_NPC_FREEZE` = `73` — Prevents movement until COND.NPC_UNFREEZE(68) is set.

---

- `SCHED_PATROL_RUN` = `76` — Run to random position and stop if enemy is heard or found.

---

- `SCHED_PATROL_WALK` = `74` — Walk to random position and stop if enemy is heard or found.

---

- `SCHED_PRE_FAIL_ESTABLISH_LINE_OF_FIRE` = `37` — 

---

- `SCHED_RANGE_ATTACK1` = `43` — 

---

- `SCHED_RANGE_ATTACK2` = `44` — 

---

- `SCHED_RELOAD` = `51` — Stop moving and reload until danger is heard.

---

- `SCHED_RUN_FROM_ENEMY` = `32` — Retreat from the established enemy.

---

- `SCHED_RUN_FROM_ENEMY_FALLBACK` = `33` — 

---

- `SCHED_RUN_FROM_ENEMY_MOB` = `83` — 

---

- `SCHED_RUN_RANDOM` = `77` — Run to random position within a radius of 500 units.

---

- `SCHED_SCENE_GENERIC` = `62` — 

---

- `SCHED_SCRIPTED_CUSTOM_MOVE` = `59` — 

---

- `SCHED_SCRIPTED_FACE` = `61` — 

---

- `SCHED_SCRIPTED_RUN` = `58` — 

---

- `SCHED_SCRIPTED_WAIT` = `60` — 

---

- `SCHED_SCRIPTED_WALK` = `57` — 

---

- `SCHED_SHOOT_ENEMY_COVER` = `39` — Shoot cover that the enemy is behind.

---

- `SCHED_SLEEP` = `87` — Sets the NPC to a sleep-like state.

---

- `SCHED_SMALL_FLINCH` = `22` — 

---

- `SCHED_SPECIAL_ATTACK1` = `45` — 

---

- `SCHED_SPECIAL_ATTACK2` = `46` — 

---

- `SCHED_STANDOFF` = `47` — 

---

- `SCHED_SWITCH_TO_PENDING_WEAPON` = `65` — 

---

- `SCHED_TAKE_COVER_FROM_BEST_SOUND` = `28` — 

---

- `SCHED_TAKE_COVER_FROM_ENEMY` = `27` — Take cover from current enemy.

---

- `SCHED_TAKE_COVER_FROM_ORIGIN` = `30` — Flee from SaveValue: vLastKnownLocation

---

- `SCHED_TARGET_CHASE` = `21` — Chase set NPC target.

---

- `SCHED_TARGET_FACE` = `20` — Face NPC target.

---

- `SCHED_VICTORY_DANCE` = `19` — Human victory dance.

---

- `SCHED_WAIT_FOR_SCRIPT` = `55` — 

---

- `SCHED_WAIT_FOR_SPEAK_FINISH` = `67` — 

---

- `SCHED_WAKE_ANGRY` = `4` — Spot an enemy and go from an idle state to combat state.

---

## `SCREENFADE` `[client/server]`

---

Bitflags used by Player:ScreenFade.

---

- `` = `0` — Instant fade in, wait for hold time AND fade time, instant fade out.

Not a real flag, but rather describes what happens when given none.

---

- `SCREENFADE.IN` = `1` — Instant fade in, slowly fade out (based on fade time given) after the hold time has passed

---

- `SCREENFADE.OUT` = `2` — Slowly fade in (based on fade time given), hold time passes, instantly disappear

---

- `SCREENFADE.MODULATE` = `4` — Instead of blending multiple active screen fades, modulate them. (TODO: What does this mean?) Internally this flag switches what material will be used to render the screen fade. Practically it forces the color to black.

---

- `SCREENFADE.STAYOUT` = `8` — Never disappear. Does nothing by itself, as if no flags were given.

---

- `SCREENFADE.PURGE` = `16` — Used to purge all currently active screen fade effects, meant to be used in conjunction with flags above as a "priority effect".

Does nothing by itself, acts as if no flags were given

---

## `SENSORBONE` `[client/server]`

---

Enumerations used by Kinect SDK bindings.

---

- `SENSORBONE.SHOULDER_RIGHT` = `8` — 

---

- `SENSORBONE.SHOULDER_LEFT` = `4` — 

---

- `SENSORBONE.HIP` = `0` — 

---

- `SENSORBONE.ELBOW_RIGHT` = `9` — 

---

- `SENSORBONE.KNEE_RIGHT` = `17` — 

---

- `SENSORBONE.WRIST_RIGHT` = `10` — 

---

- `SENSORBONE.ANKLE_LEFT` = `14` — 

---

- `SENSORBONE.FOOT_LEFT` = `15` — 

---

- `SENSORBONE.WRIST_LEFT` = `6` — 

---

- `SENSORBONE.FOOT_RIGHT` = `19` — 

---

- `SENSORBONE.HAND_RIGHT` = `11` — 

---

- `SENSORBONE.SHOULDER` = `2` — 

---

- `SENSORBONE.HIP_LEFT` = `12` — 

---

- `SENSORBONE.HIP_RIGHT` = `16` — 

---

- `SENSORBONE.HAND_LEFT` = `7` — 

---

- `SENSORBONE.ANKLE_RIGHT` = `18` — 

---

- `SENSORBONE.SPINE` = `1` — 

---

- `SENSORBONE.ELBOW_LEFT` = `5` — 

---

- `SENSORBONE.KNEE_LEFT` = `13` — 

---

- `SENSORBONE.HEAD` = `3` — 

---

## `SF` `[server]`

---

Enumerations describing certain spawnflags. Everything except for SF_PHYS* and SF_WEAPON* is serverside only.

Spawnflags are set using Entity:SetKeyValue with **"spawnflags"** as the key, or using Entity:SetSpawnFlags, Entity:AddSpawnFlags, Entity:RemoveSpawnFlags.

* SF_CITIZEN_* spawnflags represent spawnflags only usable on [npc_citizen](https://developer.valvesoftware.com/wiki/Npc_citizen).
* SF_NPC_* - Usable on all NPCs
* SF_PHYSBOX_* - Usable on [func_physbox](https://developer.valvesoftware.com/wiki/Func_physbox)
* SF_PHYSPROP_* - Usable on [prop_physics](https://developer.valvesoftware.com/wiki/Prop_physics) entities
* SF_WEAPON_* - Usable on Weapon

This is not a full list of available spawnflags, there are **a lot** more, each unique to each entity, you can find out more on the [Valve Developer Community](https://developer.valvesoftware.com/wiki/Main_Page) website for the entities in question.

---

- `SF_CITIZEN_AMMORESUPPLIER` = `524288` — Citizen that resupplies ammo

---

- `SF_CITIZEN_FOLLOW` = `65536` — "Follow the player as soon as I spawn"

---

- `SF_CITIZEN_IGNORE_SEMAPHORE` = `2097152` — "Work outside the speech semaphore system"

---

- `SF_CITIZEN_MEDIC` = `131072` — Makes the citizen a medic

---

- `SF_CITIZEN_NOT_COMMANDABLE` = `1048576` — Citizen cannot join players squad, and will not able to be commanded by the Half-Life 2 command system for Citizens

---

- `SF_CITIZEN_RANDOM_HEAD` = `262144` — Gives the citizen a random head

---

- `SF_CITIZEN_RANDOM_HEAD_FEMALE` = `8388608` — Gives the citizen a random female head

---

- `SF_CITIZEN_RANDOM_HEAD_MALE` = `4194304` — Gives the citizen a random male head

---

- `SF_CITIZEN_USE_RENDER_BOUNDS` = `16777216` — "Use render bounds instead of human hull for guys sitting in chairs, etc". Must be set before Spawn() is called to take effect

---

- `SF_FLOOR_TURRET_CITIZEN` = `512` — Makes the floor turret friendly

---

- `SF_NPC_ALTCOLLISION` = `4096` — Do Alternate collision for this NPC (player avoidance)

---

- `SF_NPC_ALWAYSTHINK` = `1024` — [Think outside PVS](https://developer.valvesoftware.com/wiki/NPC_Sensing)

---

- `SF_NPC_DROP_HEALTHKIT` = `8` — NPC Drops health kit when it dies. Also works on player.

---

- `SF_NPC_FADE_CORPSE` = `512` — Fade Corpse

---

- `SF_NPC_FALL_TO_GROUND` = `4` — If not set, means *teleport* to ground

---

- `SF_NPC_GAG` = `2` — No IDLE sounds until angry

---

- `SF_NPC_LONG_RANGE` = `256` — Long Visibility/Shoot

---

- `SF_NPC_NO_PLAYER_PUSHAWAY` = `16384` — Ignore player push - Don't give way to player

---

- `SF_NPC_NO_WEAPON_DROP` = `8192` — NPC Doesn't drop weapon on death

---

- `SF_NPC_START_EFFICIENT` = `16` — Don't acquire enemies or avoid obstacles

---

- `SF_NPC_TEMPLATE` = `2048` — This entity is a template for the [npc_template_maker](https://developer.valvesoftware.com/wiki/Npc_template_maker). It will not spawn automatically and cannot be used with [point_template](https://developer.valvesoftware.com/wiki/Point_template).

---

- `SF_NPC_WAIT_FOR_SCRIPT` = `128` — Wait for script

---

- `SF_NPC_WAIT_TILL_SEEN` = `1` — Wait till seen

---

- `SF_PHYSBOX_MOTIONDISABLED` = `32768` — If set, calls PhysObj:EnableMotion( false ) on the func_physbox when the physics are created

---

- `SF_PHYSBOX_ALWAYS_PICK_UP` = `1048576` — Gravity gun is ALWAYS allowed to pick this up.

---

- `SF_PHYSBOX_NEVER_PICK_UP` = `2097152` — Gravity gun is NOT allowed to pick this up.

---

- `SF_PHYSBOX_NEVER_PUNT` = `4194304` — Gravity gun is NOT allowed to punt this entity.

---

- `SF_PHYSPROP_MOTIONDISABLED` = `8` — If set, calls PhysObj:EnableMotion( false ) on the func_physbox when the physics are created. See [Physics optimization](https://developer.valvesoftware.com/wiki/Physics_optimization).

---

- `SF_PHYSPROP_PREVENT_PICKUP` = `512` — Prevent that physbox from being picked up.

---

- `SF_PHYSPROP_IS_GIB` = `4194304` — This flag is set if the entity is gib.

---

- `SF_ROLLERMINE_FRIENDLY` = `65536` — Makes the rollermine friendly.

---

- `SF_WEAPON_START_CONSTRAINED` = `1` — If set before Entity:Spawn, the weapon will be constrained and will not simply fall to the ground.

---

- `SF_WEAPON_NO_PLAYER_PICKUP` = `2` — Player is NOT allowed to pick this up.

---

- `SF_WEAPON_NO_PHYSCANNON_PUNT` = `4` — Physgun is NOT allowed to pick this up.

---

## `SIGNONSTATE` `[client/server]`

---

Used by GM:ClientSignOnStateChanged.

---

- `SIGNONSTATE_NONE` = `0` — 

---

- `SIGNONSTATE_CHALLENGE` = `1` — 

---

- `SIGNONSTATE_CONNECTED` = `2` — 

---

- `SIGNONSTATE_NEW` = `3` — 

---

- `SIGNONSTATE_PRESPAWN` = `4` — 

---

- `SIGNONSTATE_SPAWN` = `5` — 

---

- `SIGNONSTATE_FULL` = `6` — 

---

- `SIGNONSTATE_CHANGELEVEL` = `7` — 

---

## `SIM` `[client/server]`

---

Enumerations used by ENTITY:PhysicsSimulate.

---

- `SIM_NOTHING` = `0` — Don't simulate physics

---

- `SIM_LOCAL_ACCELERATION` = `1` — Vectors in local coordinate system

---

- `SIM_LOCAL_FORCE` = `2` — Vectors in local coordinate system

---

- `SIM_GLOBAL_ACCELERATION` = `3` — Vectors in world coordinate system

---

- `SIM_GLOBAL_FORCE` = `4` — Vectors in world coordinate system

---

## `SND` `[client/server]`

---

Sound flags used by Global.EmitSound and Entity:EmitSound.

---

- `SND_NOFLAGS` = `0` — To keep the compiler happy

---

- `SND_CHANGE_VOL` = `1` — Change sound volume. If the sound is already being emitted by the entity, its volume will be changed, instead of playing another sound.

---

- `SND_CHANGE_PITCH` = `2` — Change sound pitch. If the sound is already being emitted by the entity, its pitch will be changed, instead of playing another sound.

---

- `SND_STOP` = `4` — Stop the sound. Used internally for Entity:StopSound.

---

- `SND_SPAWNING` = `8` — We're spawning, used in some cases for ambients. Not sent over net, only a param between dll and server.

---

- `SND_DELAY` = `16` — Sound has an initial delay.

---

- `SND_STOP_LOOPING` = `32` — Stop all looping sounds on the entity.

---

- `SND_SHOULDPAUSE` = `128` — This sound should be paused if the game is paused.

---

- `SND_IGNORE_PHONEMES` = `256` — If the sound has any associated phoneme (character lip-sync) data, ignore it.

---

- `SND_IGNORE_NAME` = `512` — Used to change all sounds (e.g. with SND_CHANGE_VOL) emitted by an entity, regardless of scriptname.

---

- `SND_DO_NOT_OVERWRITE_EXISTING_ON_CHANNEL` = `1024` — Unused/legacy; does nothing.

---

## `SNDLVL` `[client/server]`

---

The sound's attenuation, or how fast it drops away. Enumerations used by Global.EmitSound and Entity:EmitSound. Information taken from [soundflags.h in Source SDK 2013](https://github.com/ValveSoftware/source-sdk-2013/blob/0d8dceea4310fde5706b3ce1c70609d72a38efdf/sp/src/public/soundflags.h#L53)

The engine starts running into trouble below 60dB.

These enumerations are not provided in Garry's Mod Lua and are listed here only for reference. Use the raw number values instead.

---

- `SNDLVL_NONE` = `0` — Sound plays everywhere

---

- `SNDLVL_20dB` = `20` — Rustling leaves

---

- `SNDLVL_25dB` = `25` — Whispering

---

- `SNDLVL_30dB` = `30` — Library

---

- `SNDLVL_35dB` = `35` — 

---

- `SNDLVL_40dB` = `40` — 

---

- `SNDLVL_45dB` = `45` — Refrigerator

---

- `SNDLVL_50dB` = `50` — Average home

---

- `SNDLVL_55dB` = `55` — 

---

- `SNDLVL_60dB` = `60` — Normal conversation, clothes dryer

---

- `SNDLVL_IDLE` = `60` — *The same as SNDLVL_60dB*

---

- `SNDLVL_65dB` = `65` — Washing machine, dishwasher

---

- `SNDLVL_STATIC` = `66` — 

---

- `SNDLVL_70dB` = `70` — Car, vacuum cleaner, mixer, electric sewing machine

---

- `SNDLVL_75dB` = `75` — Busy traffic

---

- `SNDLVL_NORM` = `75` — *The same as SNDLVL_75dB*

---

- `SNDLVL_80dB` = `80` — Mini-bike, alarm clock, noisy restaurant, office tabulator, outboard motor, passing snowmobile

---

- `SNDLVL_TALKING` = `80` — *The same as SNDLVL_80dB*

---

- `SNDLVL_85dB` = `85` — Average factory, electric shaver

---

- `SNDLVL_90dB` = `90` — Screaming child, passing motorcycle, convertible ride on freeway

---

- `SNDLVL_95dB` = `95` — 

---

- `SNDLVL_100dB` = `100` — Subway train, diesel truck, woodworking shop, pneumatic drill, boiler shop, jackhammer

---

- `SNDLVL_105dB` = `105` — Helicopter, power mower

---

- `SNDLVL_110dB` = `110` — Snowmobile (drivers seat), inboard motorboat, sandblasting

---

- `SNDLVL_120dB` = `120` — Car horn, propeller aircraft

---

- `SNDLVL_130dB` = `130` — Air raid siren

---

- `SNDLVL_140dB` = `140` — Threshold of pain, gunshot, jet engine

---

- `SNDLVL_GUNFIRE` = `140` — *The same as SNDLVL_140dB*

---

- `SNDLVL_150dB` = `150` — 

---

- `SNDLVL_180dB` = `180` — Rocket launching

---

## `SOLID` `[client/server]`

---

For use with Entity:PhysicsInit, Entity:SetSolid and Entity:GetSolid.

---

- `SOLID_NONE` = `0` — Does not collide with anything.
No physics object will be created when using this with Entity:PhysicsInit.

---

- `SOLID_BSP` = `1` — The entity has a brush model defined by the map. Does not collide with other SOLID_BSP entities.

---

- `SOLID_BBOX` = `2` — Uses the entity's axis-aligned bounding box for collisions.

---

- `SOLID_OBB` = `3` — Uses the entity's object-aligned bounding box for collisions.

---

- `SOLID_OBB_YAW` = `4` — Same as SOLID_OBB but restricts orientation to the Z-axis.
Seems to be broken.

---

- `SOLID_CUSTOM` = `5` — Always call the entity's `ICollideable::TestCollision` method for traces regardless of the presence of `FSOLID_CUSTOMRAYTEST` or `FSOLID_CUSTOMBOXTEST`. This will only be called back to Lua as ENTITY:TestCollision for `"anim"` type SENTs.

---

- `SOLID_VPHYSICS` = `6` — Uses the PhysObjects of the entity.

---

## `SOUND` `[server]`

---

Enumerations used by sound.EmitHint.

---

- `SOUND_NONE` = `0` — 

---

- `SOUND_COMBAT` = `1` — 

---

- `SOUND_WORLD` = `2` — 

---

- `SOUND_PLAYER` = `4` — 

---

- `SOUND_DANGER` = `8` — 

---

- `SOUND_BULLET_IMPACT` = `16` — 

---

- `SOUND_CARCASS` = `32` — Considered a scent.

---

- `SOUND_MEAT` = `64` — Considered a scent.

---

- `SOUND_GARBAGE` = `128` — Considered a scent.

---

- `SOUND_THUMPER` = `256` — Keeps certain creatures at bay, such as Antlions.

---

- `SOUND_BUGBAIT` = `512` — Gets the antlion's attention.

---

- `SOUND_PHYSICS_DANGER` = `1024` — 

---

- `SOUND_DANGER_SNIPERONLY` = `2048` — Only scares the sniper NPC.

---

- `SOUND_MOVE_AWAY` = `4096` — 

---

- `SOUND_PLAYER_VEHICLE` = `8192` — 

---

- `SOUND_READINESS_LOW` = `16384` — Changes listener's readiness (Player Companion only)

---

- `SOUND_READINESS_MEDIUM` = `32768` — 

---

- `SOUND_READINESS_HIGH` = `65536` — 

---

- `SOUND_CONTEXT_FROM_SNIPER` = `1048576` — Additional context for SOUND_DANGER

---

- `SOUND_CONTEXT_GUNFIRE` = `2097152` — Added to SOUND_COMBAT

---

- `SOUND_CONTEXT_MORTAR` = `4194304` — Explosion going to happen here.

---

- `SOUND_CONTEXT_COMBINE_ONLY` = `8388608` — Only combine can hear sounds marked this way.

---

- `SOUND_CONTEXT_REACT_TO_SOURCE` = `16777216` — React to sound source's origin, not sound's location

---

- `SOUND_CONTEXT_EXPLOSION` = `33554432` — Context added to SOUND_COMBAT, usually.

---

- `SOUND_CONTEXT_EXCLUDE_COMBINE` = `67108864` — Combine do NOT hear this

---

- `SOUND_CONTEXT_DANGER_APPROACH` = `134217728` — Treat as a normal danger sound if you see the source, otherwise turn to face source.

---

- `SOUND_CONTEXT_ALLIES_ONLY` = `268435456` — Only player allies can hear this sound.

---

- `SOUND_CONTEXT_PLAYER_VEHICLE` = `536870912` — HACK: need this because we're not treating the SOUND_xxx values as true bit values! See switch in OnListened.

---

## `STENCIL` `[client]`

---

Enumerations for use with render.SetStencilCompareFunction.

The comparison is between the reference value set by render.SetStencilReferenceValue, and the value of each pixel in the stencil buffer.

These enumerations are mirrors of Enums/STENCILCOMPARISONFUNCTION.

Also see this corresponding MSDN entry: https://msdn.microsoft.com/en-us/library/windows/desktop/ff476101%28v=vs.85%29.aspx.

---

- `STENCIL_NEVER` = `1` — Never passes.

---

- `STENCIL_LESS` = `2` — Passes where the reference value is less than the stencil value.

---

- `STENCIL_EQUAL` = `3` — Passes where the reference value is equal to the stencil value.

---

- `STENCIL_LESSEQUAL` = `4` — Passes where the reference value is less than or equal to the stencil value.

---

- `STENCIL_GREATER` = `5` — Passes where the reference value is greater than the stencil value.

---

- `STENCIL_NOTEQUAL` = `6` — Passes where the reference value is not equal to the stencil value.

---

- `STENCIL_GREATEREQUAL` = `7` — Passes where the reference value is greater than or equal to the stencil value.

---

- `STENCIL_ALWAYS` = `8` — Always passes.

---

- `STENCIL_KEEP` = `1` — Preserves the existing stencil buffer value.

---

- `STENCIL_ZERO` = `2` — Sets the value in the stencil buffer to 0.

---

- `STENCIL_REPLACE` = `3` — Sets the value in the stencil buffer to the reference value, set using render.SetStencilReferenceValue.

---

- `STENCIL_INCRSAT` = `4` — Increments the value in the stencil buffer by 1, clamping the result.

---

- `STENCIL_DECRSAT` = `5` — Decrements the value in the stencil buffer by 1, clamping the result.

---

- `STENCIL_INVERT` = `6` — Inverts the value in the stencil buffer.

---

- `STENCIL_INCR` = `7` — Increments the value in the stencil buffer by 1, wrapping around on overflow.

---

- `STENCIL_DECR` = `8` — Decrements the value in the stencil buffer by 1, wrapping around on overflow.

---

## `STENCILCOMPARISONFUNCTION` `[client]`

---

Enumerations for use with render.SetStencilCompareFunction.

The comparison is between the reference value set by render.SetStencilReferenceValue, and the value of each pixel in the stencil buffer.

Clientside only.
These enumerations are also mirrored as Enums/STENCIL.

Also see this corresponding MSDN entry: http://msdn.microsoft.com/en-us/library/windows/desktop/ff476101%28v=vs.85%29.aspx.

---

- `STENCILCOMPARISONFUNCTION_NEVER` = `1` — Never passes.

---

- `STENCILCOMPARISONFUNCTION_LESS` = `2` — Passes where the reference value is less than the stencil value.

---

- `STENCILCOMPARISONFUNCTION_EQUAL` = `3` — Passes where the reference value is equal to the stencil value.

---

- `STENCILCOMPARISONFUNCTION_LESSEQUAL` = `4` — Passes where the reference value is less than or equal to the stencil value.

---

- `STENCILCOMPARISONFUNCTION_GREATER` = `5` — Passes where the reference value is greater than the stencil value.

---

- `STENCILCOMPARISONFUNCTION_NOTEQUAL` = `6` — Passes where the reference value is not equal to the stencil value.

---

- `STENCILCOMPARISONFUNCTION_GREATEREQUAL` = `7` — Passes where the reference value is greater than or equal to the stencil value.

---

- `STENCILCOMPARISONFUNCTION_ALWAYS` = `8` — Always passes.

---

## `STENCILOPERATION` `[client]`

---

Enumerations for use with render.SetStencilPassOperation, render.SetStencilFailOperation and render.SetStencilZFailOperation. Clientside only.
These enumerations are also mirrored as Enums/STENCIL.

Also see this corresponding MSDN entry: http://msdn.microsoft.com/en-us/library/windows/desktop/ff476219%28v=vs.85%29.aspx.

---

- `STENCILOPERATION_KEEP` = `1` — Preserves the existing stencil buffer value.

---

- `STENCILOPERATION_ZERO` = `2` — Sets the value in the stencil buffer to 0.

---

- `STENCILOPERATION_REPLACE` = `3` — Sets the value in the stencil buffer to the reference value, set using render.SetStencilReferenceValue.

---

- `STENCILOPERATION_INCRSAT` = `4` — Increments the value in the stencil buffer by 1, clamping the result.

---

- `STENCILOPERATION_DECRSAT` = `5` — Decrements the value in the stencil buffer by 1, clamping the result.

---

- `STENCILOPERATION_INVERT` = `6` — Inverts the value in the stencil buffer.

---

- `STENCILOPERATION_INCR` = `7` — Increments the value in the stencil buffer by 1, wrapping around on overflow.

---

- `STENCILOPERATION_DECR` = `8` — Decrements the value in the stencil buffer by 1, wrapping around on overflow.

---

## `STEPSOUNDTIME` `[client/server]`

---

Enumerations used in GM:PlayerStepSoundTime hook.

---

- `STEPSOUNDTIME_NORMAL` = `0` — Normal step

---

- `STEPSOUNDTIME_ON_LADDER` = `1` — Step on ladder

---

- `STEPSOUNDTIME_WATER_KNEE` = `2` — Step in water, with water reaching knee

---

- `STEPSOUNDTIME_WATER_FOOT` = `3` — Step in water, with water reaching foot

---

## `STUDIO` `[client]`

---

Used by:
* Entity:DrawModel
* ENTITY:Draw
* ENTITY:DrawTranslucent
* WEAPON:PreDrawViewModel
* WEAPON:PostDrawViewModel
* WEAPON:ViewModelDrawn
* GM:PreDrawPlayerHands
* GM:PostDrawPlayerHands
* GM:PreDrawViewModel
* GM:PostDrawViewModel
* GM:PrePlayerDraw
* GM:PostPlayerDraw

---

- `STUDIO_RENDER` = `1` — The current render is for opaque renderables only

---

- `STUDIO_VIEWXFORMATTACHMENTS` = `2` — 

---

- `STUDIO_DRAWTRANSLUCENTSUBMODELS` = `4` — The current render is for translucent renderables only

---

- `STUDIO_TWOPASS` = `8` — The current render is for both opaque and translucent renderables

---

- `STUDIO_STATIC_LIGHTING` = `16` — 

---

- `STUDIO_WIREFRAME` = `32` — 

---

- `STUDIO_ITEM_BLINK` = `64` — 

---

- `STUDIO_NOSHADOWS` = `128` — 

---

- `STUDIO_WIREFRAME_VCOLLIDE` = `256` — 

---

- `STUDIO_GENERATE_STATS` = `16777216` — Not a studio flag, but used to flag when we want studio stats

---

- `STUDIO_SSAODEPTHTEXTURE` = `134217728` — Not a studio flag, but used to flag model as using shadow depth material override

---

- `STUDIO_SHADOWDEPTHTEXTURE` = `1073741824` — Not a studio flag, but used to flag model as using shadow depth material override

---

- `STUDIO_TRANSPARENCY` = `2147483648` — Not a studio flag, but used to flag model as a non-sorting brush model

---

- `STUDIO_SKIP_FLEXES` = `1024` — Do not update/apply flexes. (Entity:SetFlexWeight)

---

- `STUDIO_SKIP_DECALS` = `268435456` — Do not render decals.

---

## `SURF` `[client/server]`

---

Surface flags, used by the Structures/TraceResult.

---

- `SURF_LIGHT` = `1` — Value will hold the light strength

---

- `SURF_SKY2D` = `2` — The surface is a 2D skybox

---

- `SURF_SKY` = `4` — This surface is a skybox, equivalent to HitSky in Structures/TraceResult

---

- `SURF_WARP` = `8` — This surface is animated water

---

- `SURF_TRANS` = `16` — This surface is translucent

---

- `SURF_NOPORTAL` = `32` — This surface cannot have portals placed on, used by Portal's gun

---

- `SURF_TRIGGER` = `64` — This surface is a trigger

---

- `SURF_NODRAW` = `128` — This surface is an invisible entity, equivalent to HitNoDraw in Structures/TraceResult

---

- `SURF_HINT` = `256` — Make a primary bsp splitter

---

- `SURF_SKIP` = `512` — This surface can be ignored by impact effects

---

- `SURF_NOLIGHT` = `1024` — This surface has no lights calculated

---

- `SURF_BUMPLIGHT` = `2048` — Calculate three lightmaps for the surface for bumpmapping

---

- `SURF_NOSHADOWS` = `4096` — No shadows are cast on this surface

---

- `SURF_NODECALS` = `8192` — No decals are applied to this surface

---

- `SURF_NOCHOP` = `16384` — Don't subdivide patches on this surface

---

- `SURF_HITBOX` = `32768` — This surface is part of an entity's hitbox

---

## `TASKSTATUS` `[server]`

---

Used by NPC:GetTaskStatus and NPC:SetTaskStatus.

---

- `TASKSTATUS_NEW` = `0` — Just started

---

- `TASKSTATUS_RUN_MOVE_AND_TASK` = `1` — Running task &amp; movement.

---

- `TASKSTATUS_RUN_MOVE` = `2` — Just running movement.

---

- `TASKSTATUS_RUN_TASK` = `3` — Just running task.

---

- `TASKSTATUS_COMPLETE` = `4` — Completed, get next task.

---

## `TEAM` `[client/server]`

---

Default defined teams in Garry's Mod. This does not include any custom teams created in custom gamemodes. Enumerations to use with Player:Team

---

- `TEAM_CONNECTING` = `0` — Connecting team ID, set when player connects to the server

---

- `TEAM_UNASSIGNED` = `1001` — Unassigned team ID, set right after player connected

---

- `TEAM_SPECTATOR` = `1002` — Spectator team ID

---

## `TEXFILTER` `[client/menu/server]`

---

Enumerations used by render.PushFilterMin and render.PushFilterMag.

See [this](https://msdn.microsoft.com/en-us/library/windows/desktop/bb172615(v=vs.85).aspx) and [this page](https://en.wikipedia.org/wiki/Texture_filtering) for more information on texture filtering.

---

- `TEXFILTER.NONE` = `0` — Disables any filter override.

---

- `TEXFILTER.POINT` = `1` — Point sampling, no interpolation.

---

- `TEXFILTER.LINEAR` = `2` — Basic interpolation between 2 samples.

---

- `TEXFILTER.ANISOTROPIC` = `3` — Highest quality filter. Most useful for textures on 3D geometry.

---

## `TEXT_ALIGN` `[client/server]`

---

Enumerations used by draw.SimpleText, draw.DrawText and in Structures/TextData.

---

- `TEXT_ALIGN_LEFT` = `0` — Align the text on the left

---

- `TEXT_ALIGN_CENTER` = `1` — Align the text in center

---

- `TEXT_ALIGN_RIGHT` = `2` — Align the text on the right

---

- `TEXT_ALIGN_TOP` = `3` — Align the text on the top

---

- `TEXT_ALIGN_BOTTOM` = `4` — Align the text on the bottom

---

## `TEXT_FILTER` `[client]`

---

Used by util.FilterText.

---

- `TEXT_FILTER_UNKNOWN` = `0` — Unknown context.

---

- `TEXT_FILTER_GAME_CONTENT` = `1` — Game content, only legally required filtering is performed.

---

- `TEXT_FILTER_CHAT` = `2` — Chat from another player.

---

- `TEXT_FILTER_NAME` = `3` — Character or item name.

---

## `TEXTUREFLAGS` `[client]`

---

Bit flags used by Global.GetRenderTargetEx. Information taken from [VTF (Valve Texture Format) - Texture flags](https://developer.valvesoftware.com/wiki/Valve_Texture_Format#Texture_flags)

These enumerations do not exist in game and are listed here only for reference

---

- `TEXTUREFLAGS_POINTSAMPLE` = `1` — Low quality, "pixel art" texture filtering.

---

- `TEXTUREFLAGS_TRILINEAR` = `2` — Medium quality texture filtering.

---

- `TEXTUREFLAGS_CLAMPS` = `4` — Clamp S coordinates.

---

- `TEXTUREFLAGS_CLAMPT` = `8` — Clamp T coordinates.

---

- `TEXTUREFLAGS_ANISOTROPIC` = `16` — High quality texture filtering.

---

- `TEXTUREFLAGS_HINT_DXT5` = `32` — Used in skyboxes. Makes sure edges are seamless.

---

- `TEXTUREFLAGS_PWL_CORRECTED` = `64` — Purpose unknown.

---

- `TEXTUREFLAGS_NORMAL` = `128` — Texture is a normal map.

---

- `TEXTUREFLAGS_NOMIP` = `256` — Render largest mipmap only. (Does not delete existing mipmaps, just disables them.)

---

- `TEXTUREFLAGS_NOLOD` = `512` — Not affected by texture resolution settings.

---

- `TEXTUREFLAGS_ALL_MIPS` = `1024` — No Minimum Mipmap

---

- `TEXTUREFLAGS_PROCEDURAL` = `2048` — Texture is an procedural texture (code can modify it).

---

- `TEXTUREFLAGS_ONEBITALPHA` = `4096` — One bit alpha channel used.

---

- `TEXTUREFLAGS_EIGHTBITALPHA` = `8192` — Eight bit alpha channel used.

---

- `TEXTUREFLAGS_ENVMAP` = `16384` — Texture is an environment map.

---

- `TEXTUREFLAGS_RENDERTARGET` = `32768` — Texture is a render target.

---

- `TEXTUREFLAGS_DEPTHRENDERTARGET` = `65536` — Texture is a depth render target.

---

- `TEXTUREFLAGS_NODEBUGOVERRIDE` = `131072` — 

---

- `TEXTUREFLAGS_SINGLECOPY` = `262144` — 

---

- `TEXTUREFLAGS_STAGING_MEMORY` = `524288` — Aka TEXTUREFLAGS_UNUSED_00080000

---

- `TEXTUREFLAGS_IMMEDIATE_CLEANUP` = `1048576` — Immediately destroy this texture when its reference count hits zero.

Aka TEXTUREFLAGS_UNUSED_00100000

---

- `TEXTUREFLAGS_IGNORE_PICMIP` = `2097152` — Aka TEXTUREFLAGS_UNUSED_00200000

---

- `TEXTUREFLAGS_UNUSED_00400000` = `4194304` — 

---

- `TEXTUREFLAGS_NODEPTHBUFFER` = `8388608` — Do not buffer for Video Processing, generally render distance.

---

- `TEXTUREFLAGS_UNUSED_01000000` = `16777216` — 

---

- `TEXTUREFLAGS_CLAMPU` = `33554432` — Clamp U coordinates (for volumetric textures).

---

- `TEXTUREFLAGS_VERTEXTEXTURE` = `67108864` — Usable as a vertex texture

---

- `TEXTUREFLAGS_SSBUMP` = `134217728` — Texture is a SSBump. (SSB)

---

- `TEXTUREFLAGS_UNUSED_10000000` = `268435456` — 

---

- `TEXTUREFLAGS_BORDER` = `536870912` — Clamp to border colour on all texture coordinates

---

- `TEXTUREFLAGS_STREAMABLE_COARSE` = `1073741824` — Aka TEXTUREFLAGS_UNUSED_40000000

---

- `TEXTUREFLAGS_STREAMABLE_FINE` = `2147483648` — Aka TEXTUREFLAGS_UNUSED_80000000

---

## `TRACER` `[client/server]`

---

Enumerations used by Structures/AmmoData.

---

- `TRACER_NONE` = `0` — Generates no tracer effects

---

- `TRACER_LINE` = `1` — Generates tracer effects

---

- `TRACER_RAIL` = `2` — Unused.

---

- `TRACER_BEAM` = `3` — Unused.

---

- `TRACER_LINE_AND_WHIZ` = `4` — Generates tracer and makes whizzing noises if the bullet flies past the player being shot at

---

## `TRANSMIT` `[client/server]`

---

Enumerations used in ENTITY:UpdateTransmitState hook.

---

- `TRANSMIT_ALWAYS` = `0` — Always transmit the entity

---

- `TRANSMIT_NEVER` = `1` — Never transmit the entity, default for point entities

---

- `TRANSMIT_PVS` = `2` — Transmit when entity is in players [PVS (Potential Visibility Set)](https://developer.valvesoftware.com/wiki/PVS "PVS - Valve Developer Community")

---

## `TYPE` `[client/menu/server]`

---

Enumerations used by net.ReadType and returned by Global.TypeID

---

- `TYPE_NONE` = `-1` — Invalid type

---

- `TYPE_INVALID` = `-1` — Use TYPE_NONE

---

- `TYPE_NIL` = `0` — nil

---

- `TYPE_BOOL` = `1` — boolean

---

- `TYPE_LIGHTUSERDATA` = `2` — userdata#lightuserdata

---

- `TYPE_NUMBER` = `3` — number

---

- `TYPE_STRING` = `4` — string

---

- `TYPE_TABLE` = `5` — table

---

- `TYPE_FUNCTION` = `6` — function

---

- `TYPE_USERDATA` = `7` — userdata

---

- `TYPE_THREAD` = `8` — thread

---

- `TYPE_ENTITY` = `9` — Entity and entity sub-classes including Player, Weapon, NPC, Vehicle, CSEnt, and NextBot

---

- `TYPE_VECTOR` = `10` — Vector

---

- `TYPE_ANGLE` = `11` — Angle

---

- `TYPE_PHYSOBJ` = `12` — PhysObj

---

- `TYPE_SAVE` = `13` — ISave

---

- `TYPE_RESTORE` = `14` — IRestore

---

- `TYPE_DAMAGEINFO` = `15` — CTakeDamageInfo

---

- `TYPE_EFFECTDATA` = `16` — CEffectData

---

- `TYPE_MOVEDATA` = `17` — CMoveData

---

- `TYPE_RECIPIENTFILTER` = `18` — CRecipientFilter

---

- `TYPE_USERCMD` = `19` — CUserCmd

---

- `TYPE_SCRIPTEDVEHICLE` = `20` — Leftover from GMod 13 Beta

---

- `TYPE_MATERIAL` = `21` — IMaterial

---

- `TYPE_PANEL` = `22` — Panel

---

- `TYPE_PARTICLE` = `23` — CLuaParticle

---

- `TYPE_PARTICLEEMITTER` = `24` — CLuaEmitter

---

- `TYPE_TEXTURE` = `25` — ITexture

---

- `TYPE_USERMSG` = `26` — bf_read

---

- `TYPE_CONVAR` = `27` — ConVar

---

- `TYPE_IMESH` = `28` — IMesh

---

- `TYPE_MATRIX` = `29` — VMatrix

---

- `TYPE_SOUND` = `30` — CSoundPatch

---

- `TYPE_PIXELVISHANDLE` = `31` — pixelvis_handle_t

---

- `TYPE_DLIGHT` = `32` — dlight_t. Metatable of a Structures/DynamicLight

---

- `TYPE_VIDEO` = `33` — IVideoWriter

---

- `TYPE_FILE` = `34` — File

---

- `TYPE_LOCOMOTION` = `35` — CLuaLocomotion

---

- `TYPE_PATH` = `36` — PathFollower

---

- `TYPE_NAVAREA` = `37` — CNavArea

---

- `TYPE_SOUNDHANDLE` = `38` — IGModAudioChannel

---

- `TYPE_NAVLADDER` = `39` — CNavLadder

---

- `TYPE_PARTICLESYSTEM` = `40` — CNewParticleEffect

---

- `TYPE_PROJECTEDTEXTURE` = `41` — ProjectedTexture

---

- `TYPE_PHYSCOLLIDE` = `42` — PhysCollide

---

- `TYPE_SURFACEINFO` = `43` — SurfaceInfo

---

- `TYPE_COUNT` = `44` — Amount of TYPE_* enums

---

- `TYPE_COLOR` = `255` — Metatable of a Color.

This doesn't actually represent a unique type returned by Global.TypeID, but instead is a hack for networking colors with net.WriteType.

---

## `USE` `[client/server]`

---

Enumerations used by ENTITY:Use.

Not to be confused with Enums/_USE used by Entity:SetUseType.

---

- `USE_OFF` = `0` — 

---

- `USE_ON` = `1` — 

---

- `USE_SET` = `2` — 

---

- `USE_TOGGLE` = `3` — 

---

## `VIEW` `[client]`

---

Enumerations used by render.RenderView inside of Structures/ViewData.

---

- `VIEW_MAIN` = `0` — Default value

---

- `VIEW_3DSKY` = `1` — 3D skybox

---

- `VIEW_MONITOR` = `2` — Rendering for `_rt_Camera` base texture material (`func_monitor`, `info_camera_link`).

---

- `VIEW_REFLECTION` = `3` — Water reflection

---

- `VIEW_REFRACTION` = `4` — Water refraction

---

- `VIEW_INTRO_PLAYER` = `5` — Used by `script_intro` entity.

---

- `VIEW_INTRO_CAMERA` = `6` — Used by `script_intro` entity.

---

- `VIEW_SHADOW_DEPTH_TEXTURE` = `7` — Internally used for Global.ProjectedTexture and flashlight.

---

- `VIEW_SSAO` = `8` — For SSAO depth. Can be accessed via render.GetResolvedFullFrameDepth.

---

## `WEAPON_PROFICIENCY` `[client/server]`

---

Enumerations used by NPC:SetCurrentWeaponProficiency and
NPC:GetCurrentWeaponProficiency.

---

- `WEAPON_PROFICIENCY_POOR` = `0` — The NPC will miss a large majority of their shots.

---

- `WEAPON_PROFICIENCY_AVERAGE` = `1` — The NPC will miss about half of their shots.

---

- `WEAPON_PROFICIENCY_GOOD` = `2` — The NPC will sometimes miss their shots.

---

- `WEAPON_PROFICIENCY_VERY_GOOD` = `3` — The NPC will rarely miss their shots.

---

- `WEAPON_PROFICIENCY_PERFECT` = `4` — The NPC will almost never miss their shots.