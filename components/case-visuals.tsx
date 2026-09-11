import Image from 'next/image';
import { VisualLightbox } from './case-study-tools';
import { captures } from '@/data/captures';

export function Screen({
  path,
  alt,
  caption,
  compact = false,
}: {
  path: string;
  alt: string;
  caption: string;
  compact?: boolean;
}) {
  const size = captures[path];
  if (!size) return null;
  return (
    <figure className={`evidence-screen ${compact ? 'screen-compact' : ''}`}>
      <VisualLightbox title={caption}>
        <Image
          src={`/projects/${path}`}
          width={size.width}
          height={size.height}
          alt={alt}
          loading="lazy"
        />
      </VisualLightbox>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
export function AnnotatedScreen({
  path,
  alt,
  caption,
  notes,
}: {
  path: string;
  alt: string;
  caption: string;
  notes: { title: string; text: string }[];
}) {
  return (
    <div className="annotated-screen">
      <Screen path={path} alt={alt} caption={caption} />
      <ol className="annotation-rail">
        {notes.map((note, i) => (
          <li key={note.title}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h4>{note.title}</h4>
              <p>{note.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
function Exhibit({
  title,
  label,
  children,
}: {
  title: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="design-exhibit">
      <figcaption>
        <span className="eyebrow">{label}</span>
        <h3>{title}</h3>
      </figcaption>
      {children}
    </figure>
  );
}
function Chain({ items }: { items: [string, string][] }) {
  return (
    <ol className="reasoning-chain">
      {items.map(([a, b], i) => (
        <li key={a}>
          <span className="chain-index">0{i + 1}</span>
          <strong>{a}</strong>
          <p>{b}</p>
        </li>
      ))}
    </ol>
  );
}

export function ContextVisual({ slug }: { slug: string }) {
  if (slug === 'uxd-systems')
    return (
      <Exhibit
        label="SYSTEM LANDSCAPE / ANALYTICAL MAP"
        title="Separate authorities. One learning layer."
      >
        <div className="system-landscape">
          <div className="ecosystems">
            {['Apple HIG', 'Material 3', 'Fluent 2', 'Carbon'].map((x) => (
              <span key={x}>
                {x}
                <small>Official guidance</small>
              </span>
            ))}
          </div>
          <div className="landscape-bridge" aria-hidden="true">
            ↓
          </div>
          <div className="landscape-core">
            <strong>UXD / SYSTEMS</strong>
            <p>Explore context · Align comparison · Practice concepts</p>
          </div>
          <p className="exhibit-caption">
            The learning layer links back to primary sources. It does not
            replace their authority.
          </p>
        </div>
      </Exhibit>
    );
  if (slug === 'uxr-forge')
    return (
      <Exhibit
        label="RESEARCH DECISION MODEL / NOT A COMPLETED STUDY"
        title="Start with what the decision needs."
      >
        <Chain
          items={[
            [
              'Product decision',
              'What uncertainty could change the direction?',
            ],
            ['Research question', 'What do we need to learn?'],
            [
              'Method & plan',
              'Choose an approach, then define tasks and recruitment.',
            ],
            [
              'Evidence & synthesis',
              'Separate records from their interpretation.',
            ],
            ['Recommendation', 'State the tradeoff and the next check.'],
          ]}
        />
        <p className="exhibit-caption">
          Questions and interpretations can send the work back to an earlier
          stage. This is a reasoning model, not a mandatory sequence.
        </p>
      </Exhibit>
    );
  if (slug === '508-dev')
    return (
      <Exhibit
        label="EXPERIENCE MODEL / DESIGN ANALYSIS"
        title="A requirement becomes an experience."
      >
        <Chain
          items={[
            ['Visible focus', 'A control has a distinct focused state.'],
            [
              'Orientation',
              'Keyboard position is visible as navigation moves.',
            ],
            [
              'Confident action',
              'The person can identify which control will activate.',
            ],
          ]}
        />
        <div className="access-layers">
          {[
            'Visual clarity',
            'Interaction',
            'Content',
            'Semantics',
            'Assistive technology',
          ].map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
        <p className="exhibit-caption">
          These layers work together. A visible indicator alone does not
          establish correct semantics, navigation order, or screen-reader
          behavior.
        </p>
      </Exhibit>
    );
  return (
    <Exhibit
      label="IMAGE → PALETTE / ACTUAL SAMPLE OUTPUT"
      title="Extraction begins the design work."
    >
      <div className="palette-origin">
        <Image
          src="/projects/palette-snap/process/editorial-textures.jpg"
          alt="Bundled Palette Snap sample of mustard fabric, burgundy paper, and pale textured materials"
          width={1200}
          height={800}
        />
        <div>
          <p className="eyebrow">EXTRACTED IN THE PRODUCT</p>
          <div className="color-strip">
            {[
              '#0B0307',
              '#B7730E',
              '#AE8B86',
              '#572902',
              '#815B54',
              '#D8CBC1',
            ].map((x) => (
              <span key={x} style={{ background: x }}>
                <b>{x}</b>
              </span>
            ))}
          </div>
          <p>
            Name, refine, assign roles, and check a pair before export.
            Extraction does not automatically make a palette accessible.
          </p>
        </div>
      </div>
    </Exhibit>
  );
}
export function ArchitectureVisual({ slug }: { slug: string }) {
  if (slug === 'uxd-systems')
    return (
      <Exhibit
        label="CURRENT ROUTE ARCHITECTURE"
        title="Depth where needed. Reference within reach."
      >
        <div className="ia-map">
          <div className="ia-common">
            Search across the content · Bookmarks for return visits
          </div>
          <div className="ia-branches">
            {[
              ['Systems', 'Library → System profile'],
              ['Compare', 'Systems → Lens → Dimensions'],
              ['Learn', 'Curriculum → Tokens / Foundations'],
              ['Components', 'References → Button Explorer'],
              ['Playground', 'Token Lab → Live preview'],
              ['Reference', 'Patterns · Glossary · Sources'],
            ].map(([a, b]) => (
              <div key={a}>
                <h4>{a}</h4>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </Exhibit>
    );
  if (slug === 'uxr-forge')
    return (
      <Exhibit
        label="METHOD ORIENTATION / NOT A SELECTION ALGORITHM"
        title="The question changes the method."
      >
        <div className="method-orientation">
          <div>
            <h4>What people report</h4>
            <strong>Interviews / Surveys</strong>
            <p>
              Interviews can explore meaning in depth. Surveys can describe
              response patterns when the sample and question design support that
              inference.
            </p>
          </div>
          <div>
            <h4>What people do</h4>
            <strong>Usability tasks / Contextual inquiry</strong>
            <p>
              Observe task behavior or work in context. Usability studies may
              collect qualitative explanations and quantitative measures.
            </p>
          </div>
        </div>
        <p className="exhibit-caption">
          Attitudinal/behavioral and qualitative/quantitative are useful lenses,
          not fixed boxes. Sampling, context, ethics, and the decision determine
          suitability.
        </p>
      </Exhibit>
    );
  if (slug === '508-dev')
    return (
      <Exhibit
        label="KEYBOARD JOURNEY / ANALYTICAL SEQUENCE"
        title="Keep position visible throughout the task."
      >
        <div className="keyboard-journey">
          {[
            ['Tab 1', 'Skip link'],
            ['Tab 2', 'Navigation'],
            ['Tab 3', 'Next control'],
            ['Enter / Space', 'Activate button'],
          ].map(([a, b]) => (
            <div key={a}>
              <kbd>{a}</kbd>
              <span>{b}</span>
            </div>
          ))}
        </div>
        <p className="exhibit-caption">
          Conceptual sequence: exact tab stops depend on the page. Links
          activate with Enter; native buttons support Enter and Space. This
          diagram is not a recorded usability session.
        </p>
      </Exhibit>
    );
  return (
    <Exhibit
      label="COLOR ROLES / DESIGN ANALYSIS OF EXTRACTED OUTPUT"
      title="A color’s job depends on its context."
    >
      <div className="role-swatches">
        {[
          ['#0B0307', 'Deep neutral', 'Potential text'],
          ['#B7730E', 'Warm accent', 'Selective emphasis'],
          ['#AE8B86', 'Supporting tone', 'Secondary grouping'],
          ['#D8CBC1', 'Light neutral', 'Potential surface'],
        ].map(([c, a, b]) => (
          <div key={c}>
            <span style={{ background: c }} />
            <h4>{a}</h4>
            <p>{b}</p>
            <code>{c}</code>
          </div>
        ))}
      </div>
      <p className="exhibit-caption">
        These are analytical role suggestions for actual extracted colors. Every
        intended foreground/background combination still needs evaluation.
      </p>
    </Exhibit>
  );
}
export function DetailVisual({ slug, index }: { slug: string; index: number }) {
  if (slug === 'uxd-systems') {
    if (index === 0)
      return (
        <AnnotatedScreen
          path="uxd-systems/hero/desktop.png"
          alt="UXD Systems comparison with named columns for Apple HIG, Material 3, and Carbon"
          caption="Actual comparison workspace. Shared row labels align the question while each system retains its context."
          notes={[
            {
              title: 'Choose the comparison',
              text: 'System selectors sit together so the comparison set stays explicit.',
            },
            {
              title: 'Change the lens',
              text: 'Overview, Foundations, Architecture, and Operations narrow the dimensions under review.',
            },
            {
              title: 'Return to context',
              text: 'Each column links to its profile; normalized analysis remains connected to sources.',
            },
          ]}
        />
      );
    if (index === 1)
      return (
        <Exhibit
          label="TOKEN MODEL / CONCEPTUAL EXPLANATION"
          title="One value. Several layers of meaning."
        >
          <Chain
            items={[
              ['Primitive', 'A raw color value'],
              ['Semantic', 'The purpose: primary action'],
              ['Component', 'The button’s background'],
              ['Interface', 'An action with visual emphasis'],
            ]}
          />
          <p className="exhibit-caption">
            Conceptual token architecture, not literal names exported by UXD
            Systems. The actual lab maps hue to preview variables.
          </p>
        </Exhibit>
      );
    if (index === 2)
      return (
        <Screen
          path="uxd-systems/screens/comparison.png"
          alt="Full UXD Systems table comparing three system profiles across aligned dimensions"
          caption="Comparison is contextual, not a ranking. The product preserves tradeoffs and platform differences."
          compact
        />
      );
    return (
      <Exhibit
        label="BUTTON ANATOMY / ACTUAL EXPLORER STATES"
        title="The action stays recognizable as its state changes."
      >
        <div className="state-captures">
          {[
            ['default', 'Default'],
            ['focus', 'Focus'],
            ['disabled', 'Disabled'],
          ].map(([state, label]) => (
            <div key={state}>
              <p className="eyebrow">{label}</p>
              <Screen
                path={`uxd-systems/details/button-${state}.png`}
                alt={`UXD Systems Button Explorer in ${label.toLowerCase()} state`}
                caption={`${label} state in the actual component explorer.`}
              />
            </div>
          ))}
        </div>
        <div className="anatomy-labels">
          <span>01 Label: names the action</span>
          <span>02 Plus icon: supports meaning</span>
          <span>03 Padding & radius: shared silhouette</span>
          <span>04 Focus: location feedback</span>
          <span>05 Disabled: unavailable action</span>
        </div>
        <p className="exhibit-caption">
          The explorer forces visual states for study. It does not constitute a
          cross-system implementation specification.
        </p>
      </Exhibit>
    );
  }
  if (slug === 'uxr-forge') {
    if (index === 0)
      return (
        <Exhibit
          label="TRACEABILITY / IMPLEMENTED CONTENT MODEL"
          title="An insight should have a way back."
        >
          <Chain
            items={[
              ['Observation ID', 'The recorded teaching example'],
              ['Theme', 'A grouping of observations'],
              [
                'Insight',
                'An interpretation with supporting and challenging records',
              ],
              [
                'Recommendation',
                'A proposed response, tradeoff, and validation plan',
              ],
            ]}
          />
          <p className="exhibit-caption">
            All displayed study data is synthetic. The visual describes
            relationships, not participant findings.
          </p>
        </Exhibit>
      );
    if (index === 1)
      return (
        <AnnotatedScreen
          path="uxr-forge/screens/planner.png"
          alt="UXR Forge planning workspace with research decision, questions, and plan stages"
          caption="A fresh planner capture. Question framing precedes study design in the actual workspace."
          notes={[
            {
              title: 'Frame before choosing',
              text: 'Decision and research-question fields establish what the study needs to inform.',
            },
            {
              title: 'Separate stages',
              text: 'The plan divides framing, study design, and preparation instead of displaying one undifferentiated form.',
            },
            {
              title: 'Make storage boundaries explicit',
              text: 'Local-draft notices distinguish browser persistence from shared or cloud storage.',
            },
          ]}
        />
      );
    return (
      <Screen
        path="uxr-forge/screens/synthesis.png"
        alt="UXR Forge synthesis workspace for linking evidence and interpretation"
        caption="Synthesis uses explicit evidence relationships. Practice content is authored teaching material, not completed research."
      />
    );
  }
  if (slug === '508-dev' && index === 2)
    return (
      <Exhibit
        label="EVIDENCE STATUS / PRODUCT POLICY"
        title="A reference is a starting point, not a guarantee."
      >
        <Chain
          items={[
            ['Reference', 'An educational implementation to inspect.'],
            [
              'Documented evaluation',
              'Record the browser, assistive technology, task, and result.',
            ],
            [
              'Scoped claim',
              'Describe only the combinations and behaviors actually evaluated.',
            ],
          ]}
        />
      </Exhibit>
    );
  if (slug === '508-dev')
    return index === 0 ? (
      <AnnotatedScreen
        path="508-dev/details/target-comparison.png"
        alt="508 Dev target-size example with a small crowded control and a 44 by 44 CSS pixel control"
        caption="Actual paired reference example. The labels qualify the failure and distinguish target size from complete accessibility."
        notes={[
          {
            title: 'Show the difference',
            text: 'Unequal target areas make the precision demand tangible.',
          },
          {
            title: 'Retain the caveat',
            text: 'The page explains exceptions; a small target is not automatically a failure in every context.',
          },
          {
            title: 'Use more than color',
            text: 'Labels and borders communicate the two states alongside their surface treatment.',
          },
        ]}
      />
    ) : (
      <Exhibit
        label="PATTERN EVALUATION / ANALYTICAL CHECK"
        title="Appearance is one layer of the comparison."
      >
        <div className="access-comparison">
          {[
            ['Name', 'Does the control explain its action?'],
            ['Keyboard', 'Can the task be completed without a pointer?'],
            ['Focus', 'Can someone locate the active control?'],
            ['Feedback', 'Is the result available beyond color alone?'],
          ].map(([a, b]) => (
            <div key={a}>
              <span>{a}</span>
              <p>{b}</p>
            </div>
          ))}
        </div>
      </Exhibit>
    );
  if (index === 0)
    return (
      <AnnotatedScreen
        path="palette-snap/details/swatch.png"
        alt="Palette Snap selected-color panel showing a swatch, name field, HEX RGB HSL values, role selection, and editing actions"
        caption="Actual selected-color panel. The swatch remains connected to editable and reusable information."
        notes={[
          {
            title: 'One selected color',
            text: 'A large sample and repeated value keep the editing context visible.',
          },
          {
            title: 'Multiple representations',
            text: 'HEX, RGB, and HSL offer copy actions for different destinations.',
          },
          {
            title: 'Meaning and control',
            text: 'Naming, role assignment, move controls, and locking support deliberate refinement.',
          },
        ]}
      />
    );
  if (index === 1)
    return (
      <Exhibit
        label="COPY INTERACTION / ACTUAL STATES"
        title="Make the result of an action visible."
      >
        <div className="paired-screens">
          <Screen
            path="palette-snap/details/swatch.png"
            alt="Selected color before the copy action"
            caption="Before copying: the selected value and copy action are available."
          />
          <Screen
            path="palette-snap/details/copied.png"
            alt="Selected color panel immediately after activating copy value"
            caption="After activating Copy value in the actual product. Browser permission determines clipboard success."
          />
        </div>
      </Exhibit>
    );
  return (
    <Screen
      path="palette-snap/details/palette.png"
      alt="Palette Snap extracted swatches with names, hex values, and a selected outline"
      caption="Names and values complement color. Selection is indicated by an outline rather than a hue change alone."
    />
  );
}
export function ResponsiveVisual({ slug }: { slug: string }) {
  if (slug !== 'uxd-systems' && slug !== 'palette-snap') return null;
  return (
    <Exhibit
      label="RESPONSIVE BEHAVIOR / ACTUAL CAPTURES"
      title={
        slug === 'uxd-systems'
          ? 'Preserve the controls. Change the reading order.'
          : 'Keep refinement available in a narrow workspace.'
      }
    >
      <div className="responsive-evidence">
        <Screen
          path={
            slug === 'uxd-systems'
              ? 'uxd-systems/details/token-comfortable.png'
              : 'palette-snap/details/palette.png'
          }
          alt={`${slug} desktop controls and content`}
          caption="Desktop: related controls and output share the available width."
        />
        <Screen
          path={
            slug === 'uxd-systems'
              ? 'uxd-systems/screens/token-mobile.png'
              : 'palette-snap/screens/palette-mobile.png'
          }
          alt={`${slug} actual mobile layout at 390 CSS pixels`}
          caption="Mobile: actual 390px capture. Read the controls and their output in sequence."
        />
      </div>
      <p className="exhibit-caption">
        A narrow layout trades simultaneous visibility for readable controls.
        The next usability check should examine whether people can connect
        changes with output after scrolling.
      </p>
    </Exhibit>
  );
}
export function TokenStates() {
  return (
    <Exhibit
      label="CAUSE → EFFECT / ACTUAL TOKEN LAB"
      title="Density changes the space around the same content."
    >
      <div className="paired-screens">
        <Screen
          path="uxd-systems/details/token-comfortable.png"
          alt="UXD Systems Token Lab with comfortable density selected"
          caption="Comfortable: the starting state of the actual lab."
        />
        <Screen
          path="uxd-systems/details/token-compact.png"
          alt="The same UXD Systems Token Lab with compact density selected"
          caption="Compact: density changes while the other control values remain unchanged."
        />
      </div>
      <div className="token-effects">
        {[
          ['Theme', 'Surface & text'],
          ['Color', 'Action emphasis'],
          ['Spacing', 'Component separation'],
          ['Radius', 'Container shape'],
          ['Density', 'Space within the layout'],
        ].map(([a, b]) => (
          <p key={a}>
            <strong>{a}</strong>
            <span aria-hidden="true"> → </span>
            {b}
          </p>
        ))}
      </div>
    </Exhibit>
  );
}
