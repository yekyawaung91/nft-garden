import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Grid3x3, List, Filter, ChevronDown } from "lucide-react";
import NFTCard from "../components/NFTCard";
import { nfts } from "../data/nfts";

type ViewMode = "grid" | "list";
type TraitFilter = "all" | "common" | "uncommon" | "rare" | "epic" | "legendary";
type CategoryFilter =
  | "all"
  | "weapon"
  | "armor pieces"
  | "artwork"
  | "character"
  | "item"
  | "collectible";
type SortOrder = "price-high" | "price-low" | "newest" | "oldest";

export default function Explore() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [traitFilter, setTraitFilter] = useState<TraitFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [showFilters, setShowFilters] = useState(false);

  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // loading state
  const [loading, setLoading] = useState(false);

  // reset to page 1 when filters/sort change
  useEffect(() => {
    setCurrentPage(1);
  }, [traitFilter, categoryFilter, sortOrder]);

  // simulate loading effect when filters or pagination change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // 0.5s skeleton
    return () => clearTimeout(timer);
  }, [traitFilter, categoryFilter, sortOrder, currentPage]);

  const filteredNFTs = nfts
    .filter((nft) => traitFilter === "all" || nft.trait_type === traitFilter)
    .filter((nft) => categoryFilter === "all" || nft.category === categoryFilter)
    .sort((a, b) => {
      switch (sortOrder) {
        case "price-high":
          return b.price - a.price;
        case "price-low":
          return a.price - b.price;
        case "newest":
          return (
            new Date(b.created_at).getTime() -
            new Date(a.created_at).getTime()
          );
        case "oldest":
          return (
            new Date(a.created_at).getTime() -
            new Date(b.created_at).getTime()
          );
        default:
          return 0;
      }
    });

  // pagination logic
  const totalPages = Math.ceil(filteredNFTs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNFTs = filteredNFTs.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Explore NFTs
          </h1>
          <p className="text-slate-400 text-lg">
            Discover {nfts.length} unique digital assets
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`lg:w-64 ${showFilters ? "block" : "hidden lg:block"}`}
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </h3>
              </div>

              <div className="space-y-6">
                {/* Rarity */}
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-3">
                    Rarity
                  </label>
                  <div className="space-y-2">
                    {[
                      "all",
                      "common",
                      "uncommon",
                      "rare",
                      "epic",
                      "legendary",
                    ].map((trait) => (
                      <button
                        key={trait}
                        onClick={() => setTraitFilter(trait as TraitFilter)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all capitalize ${
                          traitFilter === trait
                            ? "bg-gradient-to-r from-purple-500 to-blue-600 text-white"
                            : "bg-slate-700/50 text-slate-300 hover:bg-slate-700"
                        }`}
                      >
                        {trait}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-3">
                    Category
                  </label>
                  <div className="space-y-2">
                    {[
                      "all",
                      "weapon",
                      "armor pieces",
                      "artwork",
                      "character",
                      "item",
                      "collectible",
                    ].map((cat) => (
                      <button
                        key={cat}
                        onClick={() =>
                          setCategoryFilter(cat as CategoryFilter)
                        }
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all capitalize ${
                          categoryFilter === cat
                            ? "bg-gradient-to-r from-purple-500 to-blue-600 text-white"
                            : "bg-slate-700/50 text-slate-300 hover:bg-slate-700"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-3">
                    Sort By
                  </label>
                  <div className="relative">
                    <select
                      value={sortOrder}
                      onChange={(e) =>
                        setSortOrder(e.target.value as SortOrder)
                      }
                      className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="newest">Newest</option>
                      <option value="oldest">Oldest</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="price-low">Price: Low to High</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-400">
                Showing{" "}
                <span className="text-white font-semibold">
                  {filteredNFTs.length}
                </span>{" "}
                results
              </p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden px-4 py-2 bg-slate-800 text-white rounded-lg flex items-center space-x-2 border border-slate-700"
                >
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                </button>
                <div className="flex bg-slate-800 rounded-lg p-1 border border-slate-700">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded transition-all ${
                      viewMode === "grid"
                        ? "bg-gradient-to-r from-purple-500 to-blue-600 text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Grid3x3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded transition-all ${
                      viewMode === "list"
                        ? "bg-gradient-to-r from-purple-500 to-blue-600 text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* NFT Cards */}
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              {loading
                ? [...Array(itemsPerPage)].map((_, i) => (
                    <div
                      key={`skeleton-${i}`}
                      className="animate-pulse p-4 border border-slate-700 rounded-lg space-y-3"
                    >
                      <div className="h-64 bg-slate-800 rounded-lg"></div>
                      <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                      <div className="h-4 bg-slate-800 rounded w-1/1"></div>
                      <div className="h-4 bg-slate-800 rounded w-1/1"></div>
                      <div className="flex justify-between gap-4">
                          <div className="h-4 bg-slate-800 rounded w-1/6"></div>
                          <div className="h-4 bg-slate-800 rounded w-1/4"></div>
                      </div>
                      
                    </div>
                  ))
                : currentNFTs.map((nft) => (
                    <NFTCard
                      key={nft.id}
                      nft={nft}
                      isListView={viewMode === "list"}
                    />
                  ))}
            </div>

            {!loading && filteredNFTs.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-400 text-lg">
                  No NFTs found matching your filters
                </p>
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                {/* Prev button */}
                <button
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className="px-3 py-1 rounded bg-slate-800 text-white disabled:opacity-50"
                >
                  Prev
                </button>

                {/* Page numbers */}
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={`page-${i}`}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded ${
                      currentPage === i + 1
                        ? "bg-gradient-to-r from-purple-500 to-blue-600 text-white"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                {/* Next button */}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className="px-3 py-1 rounded bg-slate-800 text-white disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
