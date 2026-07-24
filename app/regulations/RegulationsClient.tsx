"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Map, List, Info, ArrowRight, ArrowUpRight } from "lucide-react";
import { regions as allRegions, type Region, type CountryCode } from "./_data/regions";
import { resourceCategories, type ResourceCategory } from "./_data/resources";
import RegionMap from "./_components/RegionMap";
import styles from "./page.module.css";

interface RegulationsClientProps {
  regions?: Region[];
  categories?: ResourceCategory[];
}

export default function RegulationsClient({
  regions = allRegions,
  categories = resourceCategories,
}: RegulationsClientProps) {
  const router = useRouter();
  const [countryFilter, setCountryFilter] = useState<"all" | CountryCode>("all");
  const [view, setView] = useState<"map" | "list">("map");

  const filteredRegions = useMemo(() => {
    let list = regions;
    if (countryFilter !== "all") {
      list = list.filter((r) => r.country === countryFilter);
    }
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }, [regions, countryFilter]);

  const handleRegionSelect = useCallback(
    (slug: string) => {
      router.push(`/regulations/${slug}`);
    },
    [router]
  );

  const scrollToCategory = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const countryLabel = (code: CountryCode) => (code === "CA" ? "Canada" : "United States");
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className={styles.container}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <Image
          src="/s-heavyhaul.jpeg"
          alt="Oversize and overweight regulations"
          fill
          sizes="100vw"
          className={styles.heroBg}
          priority
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Permits &amp; Escorts</span>
          <h1 className={styles.title}>
            Oversize / Overweight <span className={styles.textPrimary}>Regulations</span>
          </h1>
          <p className={styles.subtitle}>
            A practical regulatory hub for Canada and the United States — select a province or
            state for high-level requirements, or browse the reference topics below.
          </p>
        </div>
      </section>

      {/* Slim disclaimer — accent rule, not a box */}
      <div className={styles.noteWrap}>
        <p className={styles.note}>
          <Info size={16} />
          <span>
            Regulations change frequently. Always confirm current details with the issuing
            authority before moving a load.
          </span>
        </p>
      </div>

      {/* Main layout */}
      <div className={styles.layoutWrapper}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.stickyNav}>
            <span className={styles.navTitle}>Reference Topics</span>
            <ul className={styles.navList}>
              {categories.map((category, i) => (
                <li key={category.slug}>
                  <a
                    href={`#${category.slug}`}
                    className={styles.navLink}
                    onClick={(e) => scrollToCategory(e, category.slug)}
                  >
                    <span className={styles.navIndex}>{pad(i + 1)}</span>
                    <span>{category.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <main className={styles.mainContent}>
          <section aria-labelledby="region-directory-title">
            <span className={styles.eyebrow}>Interactive Directory</span>
            <h2 id="region-directory-title" className={styles.sectionTitle}>
              Regulations by Region
            </h2>
            <p className={styles.sectionIntro}>
              Choose a country and a view. The map highlights each region with its abbreviation —
              hover for the full name and select any region to open its regional overview.
            </p>

            <div className={styles.controls}>
              <div className={styles.filterGroup} role="group" aria-label="Filter by country">
                {(["all", "CA", "US"] as const).map((code) => (
                  <button
                    key={code}
                    type="button"
                    className={`${styles.controlBtn} ${
                      countryFilter === code ? styles.controlBtnActive : ""
                    }`}
                    onClick={() => setCountryFilter(code)}
                    aria-pressed={countryFilter === code}
                  >
                    {code === "all" ? "All Regions" : countryLabel(code)}
                  </button>
                ))}
              </div>

              <div className={styles.viewGroup} role="group" aria-label="Choose view">
                <button
                  type="button"
                  className={`${styles.controlBtn} ${view === "map" ? styles.controlBtnActive : ""}`}
                  onClick={() => setView("map")}
                  aria-pressed={view === "map"}
                >
                  <Map size={15} />
                  Map
                </button>
                <button
                  type="button"
                  className={`${styles.controlBtn} ${
                    view === "list" ? styles.controlBtnActive : ""
                  }`}
                  onClick={() => setView("list")}
                  aria-pressed={view === "list"}
                >
                  <List size={15} />
                  List
                </button>
              </div>
            </div>

            {view === "map" ? (
              <div className={styles.mapWrapper}>
                <RegionMap regions={filteredRegions} onSelect={handleRegionSelect} />
                <div className={styles.mapLegend}>
                  <span className={styles.legendItem}>
                    <span className={`${styles.legendDot} ${styles.legendDotCa}`}></span>
                    Canada
                  </span>
                  <span className={styles.legendItem}>
                    <span className={`${styles.legendDot} ${styles.legendDotUs}`}></span>
                    United States
                  </span>
                  <span className={styles.legendItem}>
                    <span className={`${styles.legendDot} ${styles.legendDotTerminal}`}></span>
                    Terminal
                  </span>
                </div>
              </div>
            ) : (
              <div className={styles.regionGrid} role="list">
                {filteredRegions.length > 0 ? (
                  filteredRegions.map((region) => (
                    <Link
                      key={region.slug}
                      href={`/regulations/${region.slug}`}
                      className={styles.regionCard}
                      role="listitem"
                    >
                      <span className={styles.regionAbbr}>{region.abbr}</span>
                      <span className={styles.regionName}>{region.name}</span>
                      <ArrowUpRight size={16} className={styles.regionArrow} />
                    </Link>
                  ))
                ) : (
                  <p className={styles.emptyState}>No regions match the selected filter.</p>
                )}
              </div>
            )}
          </section>

          {/* CTA band */}
          <section className={styles.ctaBand}>
            <div className={styles.ctaCopy}>
              <span className={styles.ctaEyebrow}>Heavy-Haul Desk</span>
              <p className={styles.ctaText}>
                Need help interpreting permits, escorts, or routing for your next move?
              </p>
            </div>
            <Link href="/get-a-quote" className={styles.ctaBtn}>
              Talk to Our Team <ArrowRight size={18} />
            </Link>
          </section>

          {/* Resource categories — editorial */}
          <section aria-labelledby="topics-title">
            <span className={styles.eyebrow}>Reference Library</span>
            <h2 id="topics-title" className={styles.sectionTitle}>
              Permit &amp; Escort Topics
            </h2>

            <div className={styles.categoryList}>
              {categories.map((category, i) => (
                <article key={category.slug} id={category.slug} className={styles.categoryRow}>
                  <div className={styles.categoryHead}>
                    <span className={styles.categoryIndex}>{pad(i + 1)}</span>
                    <h3 className={styles.categoryTitle}>{category.title}</h3>
                  </div>
                  <div className={styles.categoryBody}>
                    <p className={styles.categoryDescription}>{category.description}</p>
                    <ul className={styles.pointList}>
                      {category.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
