import { Sec, Head } from './ui';
import { tw } from './tw';
import { CHECKED, ROWS, UNVERIFIED, type Rival } from '@/content/compare';

/** Side-by-side table: our column is highlighted; unverified competitor cells say so instead of guessing. */
export function CompareTable({ rivals, h = 'Side-by-side comparison' }: { rivals: Rival[]; h?: string }) {
  return (
    <Sec className={tw.light}>
      <Head h={h} p={<>Competitor details come from their public websites{CHECKED ? `, last checked ${CHECKED}` : ''}. Tell us if anything has changed and we’ll update it.</>} />
      <div className={`${tw.tablebox} overflow-x-auto`} data-reveal="">
        <table className={`${tw.dtable} min-w-[720px]`}>
          <thead><tr>
            <th scope="col"><span className="sr-only">Feature</span></th>
            <th scope="col" className="!bg-tint !text-act">Crack The Campus</th>
            {rivals.map((r) => <th scope="col" key={r.slug}><a href={r.site} rel="noopener nofollow" className="!text-tx">{r.name}</a></th>)}
          </tr></thead>
          <tbody>
            {ROWS.map(([f, ctc]) => (
              <tr key={f}>
                <th scope="row">{f}</th>
                <td className="bg-[rgba(241,238,254,.5)] font-medium text-ink">{ctc}</td>
                {rivals.map((r) => <td key={r.slug} className={r.known[f] ? '' : 'text-muted'}>{r.known[f] ?? UNVERIFIED}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Sec>
  );
}
