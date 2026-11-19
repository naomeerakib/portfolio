import type { ReactNode } from 'react';

/*
 * Writing for the motion section.
 * Each line: text, indent (in em, measured from the original layout),
 * and style: italic by default; bold = bold italic; plain = upright.
 * An empty string is a blank line. `gap` inserts a space inside a line.
 */

type Line =
  | string
  | { t: string; i?: number; bold?: boolean; plain?: boolean; gap?: { after: string; em: number } };

const L = (t: string, i = 0): Line => ({ t, i });
const B = (t: string, i = 0): Line => ({ t, i, bold: true });
const P = (t: string): Line => ({ t, plain: true });

function Poem({ lines, center = false }: { lines: Line[]; center?: boolean }) {
  // Scale the text so the longest poem still fits the screen without scrolling
  const fontSize = `min(15px, calc((100vh - 190px) / ${(lines.length * 1.3).toFixed(1)}))`;
  return (
    <div className={`max-h-full ${center ? 'text-center' : 'text-left'}`} style={{ fontSize, lineHeight: 1.3 }}>
      {lines.map((line, index) => {
        if (typeof line === 'string') {
          return <div key={index}>{line || ' '}</div>;
        }
        const style = {
          paddingLeft: line.i ? `${line.i}em` : undefined,
          fontStyle: line.plain ? 'normal' : 'italic',
          fontWeight: line.bold ? 700 : 400,
          whiteSpace: 'pre' as const,
        };
        if (line.gap) {
          const [before, after] = [line.gap.after, line.t.slice(line.gap.after.length)];
          return (
            <div key={index} style={style}>
              {before}
              <span style={{ display: 'inline-block', width: `${line.gap.em}em` }} />
              {after.trimStart()}
            </div>
          );
        }
        return (
          <div key={index} style={style}>
            {line.t}
          </div>
        );
      })}
    </div>
  );
}

const intro: Line[] = [
  P('i will write you four poems:'),
  '',
  P('one for your contradiction'),
  '',
  P('one for your cowardice'),
  '',
  P('one for your question'),
  '',
  P('and one for your prayer.'),
];

const poem1: Line[] = [
  P('1'),
  '',
  { t: 'it is in the brink of november', gap: { after: 'it is', em: 3 } },
  L('that the sky falls into the depths of your'),
  L('mahogany eyes', 5.7),
  L("for i can't take one more second of", 2.1),
  L('folly or play', 2.1),
  L('that you lay out in your seventh heaven'),
  L('so come-hither and i', 4.8),
  L('tantalized by your beauty'),
  L('let slip the betelgeuse of a paradox'),
  L('that is you'),
  L('and you ponder thought', 5.4),
  L('in unease that', 5.4),
  B('none of you is true'),
  B('if it is two'),
  L('but unlike matter of solid and gas', 5.1),
  L('our souls are matched to be sublime', 1.5),
  B('fact of self is rarely fact', 15.9),
  L('behold, my love, thyself in pain'),
  L('for the pain is fortune, in learning self'),
  L('courageous and candid', 2.1),
  L('coward and crooked', 2.1),
  L("the grandfather's hand"),
  L('incessant against your will'),
  L('incessant regardless of you, belowing into the mud'),
  L('the mud of your conduct', 2.1),
  L('whatever the precedent'),
  L("i'll promise you now", 4.5),
  L('polar or not'),
  L('your mortal being is enough worthy'),
  L('of understanding.'),
  '',
  '',
  P('It is 00:43.'),
];

const poem2: Line[] = [
  P('2'),
  '',
  L('twenty five years around the sun'),
  L('twenty five days of us'),
  L('twenty five minutes left before i'),
  L('find a narrow sliver', 5.4),
  L('of hope in the woods', 5.4),
  L('i ache to run'),
  L('a stotting fawn', 5.1),
  L('prayer in the shadow'),
  L('prey in the pond'),
  L('home to you and home to me'),
  L('twenty five seconds to tell you i am'),
  L('shrinking into my liver', 5.4),
  L('raw', 5.4),
  L('unyielding'),
  L('it will not save me from myself', 5.4),
  L('and nor you from my fiction'),
  '',
  L('oh, ocean, deep blue,'),
  L('tell me you will', 7.1),
  L('see him at shore', 7.1),
  L('and when the eventide follows and the sun caresses him'),
  L('wash the copper off his skin', 2.1),
  L('three waves at a time'),
  L('then dress his wounds', 2.4),
  L('in the soil of my grief'),
  L('sing the mockingbirds back his name'),
  L('so in the woods i can sleep'),
  '',
  L('i plead and beg to the ocean vast'),
  L('for my own cowardice'),
  L('seldom desires'),
  L('self-preservation'),
  L('and will never allow', 2.1),
  L('me movement when our eyes collide.'),
  P('It is 01:41.'),
];

const poem3: Line[] = [
  P('3'),
  '',
  '',
  L('your nectar'),
  L('a lens'),
  '',
  L('a question asked'),
  L('but seek inside'),
  L('in truths and lies you have told yourself'),
  L('in loves and loves lost'),
  '',
  L('beauty is prejudiced'),
  L('ce qui le rend beau'),
  L('ask me, and i will say'),
  L('we forget the eyes that first felt', 6),
  L('the beauty in its subject'),
  L('oozing', 10.5),
  L('seeping into the cornea'),
  L('<observed> upside down'),
  L('<perceived> downside up', 6.3),
  L('we forget the hand'),
  L('that trembles'),
  L('and takes the photo'),
  B('in longing for a witness'),
  L('to the evidence of existence', 8.4),
  '',
  '',
  '',
  P('It is 02:02.'),
];

const poem4: Line[] = [
  P('4'),
  '',
  '',
  B('<as long as you are happy>'),
  L('how many loves have been debacled by this misbelief'),
  '',
  L('she can feel your heartbeat through your arm'),
  L('her head on your shoulder'),
  L('you kiss her cranium, quiet as the grave'),
  L('of your love for her', 3.3),
  '',
  L("and you don't believe in a God, large or small"),
  L('still you pray', 3.5),
  L('for the monumental ripple'),
  L('she is yet to absorb'),
  L('of your departure'),
  L("she doesn't know"),
  L('or so you think', 6),
  '',
  L('she prays to her God'),
  L('that your non-God answers'),
  L('in cruel summers and starving winters'),
  L('and blossoming springs that you find briskly'),
  L('in another woman'),
  L("what you didn't"),
  L('in her', 2.7),
  L('if she has time, she will write another'),
  L('letter to the universe'),
  L('poised and slow, of'),
  L('the unbecoming of her womanhood in', 3.3),
  L('the hurt you sowed', 3.3),
  B('and still she will declare you immune'),
  L('to her God'),
  L('merciless', 5.4),
  L('devoted to His worshipper'),
  '',
  L('<as long as you are happy>'),
  '',
  '',
  P('You asked me for a prayer.'),
];

export const illSeeYouSlides: { id: string; caption: string; content: ReactNode }[] = [
  { id: 'isy-intro', caption: "i'll see you when i see you", content: <Poem lines={intro} /> },
  { id: 'isy-1', caption: "i'll see you when i see you", content: <Poem lines={poem1} /> },
  { id: 'isy-2', caption: "i'll see you when i see you", content: <Poem lines={poem2} /> },
  { id: 'isy-3', caption: "i'll see you when i see you", content: <Poem lines={poem3} /> },
  { id: 'isy-4', caption: "i'll see you when i see you", content: <Poem lines={poem4} /> },
];

const haiku1: Line[] = [P('1'), '', L('silly kinetics'), L('had you drowned heavens under'), L('my cobalt iris')];
const haiku2: Line[] = [P('2'), '', L('willowing father'), L('seven seconds, seven suns washed'), L('to the shore at dusk')];
const haiku3: Line[] = [
  P('3'),
  '',
  L('sticky tongue and taste'),
  L('make no haste of me in hell'),
  L('i’m where i belong'),
  '',
  '',
  L('-naomee'),
];

export const haikuSlides: { id: string; caption: string; content: ReactNode }[] = [
  { id: 'haiku-1', caption: 'haikus and observations', content: <Poem lines={haiku1} center /> },
  { id: 'haiku-2', caption: 'haikus and observations', content: <Poem lines={haiku2} center /> },
  { id: 'haiku-3', caption: 'haikus and observations', content: <Poem lines={haiku3} center /> },
];

const stranger: Line[] = [
  L('oh night'),
  L('slim and low', 4.2),
  L('what bewitches you?'),
  L('a ghost, of futures not realized'),
  L('or the ghost, of desire to be forgotten'),
  '',
  L('tonight you will tell her a half truth'),
  { t: 'bury the cradle warm and', i: 3.7, gap: { after: 'bury the cradle warm', em: 3.4 } },
  L('hoist your chin down with the ultramarine gaze'),
  L('sing a sigh of madness and cover your damp palms with her hard-boiled face'),
  '',
  L('the end of your wonderland is at the edge of her bed', 7.3),
  '',
  L('a second to indulge in her breath, heavy and open mouthed'),
  L('only you know that the body sleeping next to her tomorrow will be your absence'),
  L('so you unearth yourself from the unholied sheets', 4.5),
  L('and look at the moon lingering outside the window, unwilling to call on the sun'),
  L('because when the sun arrives you must go and'),
  L('leave the sweat on her spine, copper and curled'),
  P('hush dearest'),
  '',
  L('tomorrow when the rain hits the window in bitter yellow notes'),
  L('she will forgive herself'),
  L('for the trust she had allowed wept and wept'),
  L('the door'),
  L('in stupendous fashion', 3.9),
  L('is waiting for a hand that will never open it again'),
];

export const strangerSlides: { id: string; caption: string; content: ReactNode }[] = [
  { id: 'stranger-1', caption: 'instructions on becoming a stranger', content: <Poem lines={stranger} /> },
];
