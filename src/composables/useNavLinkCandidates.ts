import type { ComputedRef } from 'vue';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import type { Router } from 'vue-router';

export type NavLinkCandidate = {
  routeName: string;
  label: string;
};

/** Router に登録済みかつ meta.navLink な leaf のみ一覧用に返します。 */
export function listNavLinkCandidates (router: Router): NavLinkCandidate[] {
  const out: NavLinkCandidate[] = [];

  for (const r of router.getRoutes()) {
    if (!r.meta?.navLink || r.redirect != null) continue;

    const n = r.name;
    if (typeof n !== 'string' || n.length === 0) continue;

    const labelRaw = r.meta.navLabel;
    const label =
      typeof labelRaw === 'string' && labelRaw.trim().length > 0 ? labelRaw.trim() : n;

    if (!router.hasRoute(n)) continue;
    out.push({ routeName: n, label });
  }

  out.sort((a, b) => a.label.localeCompare(b.label, 'ja'));
  return out;
}

export function useNavLinkCandidates (): ComputedRef<NavLinkCandidate[]> {
  const router = useRouter();
  return computed(() => listNavLinkCandidates(router));
}
