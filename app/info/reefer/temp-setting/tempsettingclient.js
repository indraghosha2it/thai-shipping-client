"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Ship, 
  Globe, 
  MapPin, 
  Anchor, 
  Calendar,
  ArrowRight,
  Thermometer,
  Snowflake,
  Droplets,
  Clock,
  Shield,
  CheckCircle,
  Wifi,
  AlertTriangle,
  Package,
  Truck,
  Box,
  Leaf,
  Gauge,
  Search,
  ChevronDown,
  Filter
} from "lucide-react";

export default function ShelfLifeTemperaturePage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState("vegetables");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Vegetable Data
  const vegetableData = [
    { commodity: "Artichokes, globe", maxDays: "15-20", tempF: "32", tempC: "0", airVent: "10", defrost: "3" },
    { commodity: "Asparagus", maxDays: "100-150", tempF: "32", tempC: "0", airVent: "5", defrost: "3" },
    { commodity: "Beans, lima", maxDays: "7-10", tempF: "32-39", tempC: "0-4", airVent: "5", defrost: "3" },
    { commodity: "Beans, snap or green", maxDays: "7-10", tempF: "32", tempC: "0", airVent: "20", defrost: "3" },
    { commodity: "Beets, bunch", maxDays: "10-14", tempF: "32", tempC: "0", airVent: "5", defrost: "3" },
    { commodity: "Beets, roots", maxDays: "90-150", tempF: "32", tempC: "0", airVent: "none", defrost: "3" },
    { commodity: "Broccoli", maxDays: "10-14", tempF: "32-39", tempC: "0-4", airVent: "20", defrost: "3" },
    { commodity: "Brussels sprouts", maxDays: "17-25", tempF: "32-39", tempC: "0-4", airVent: "20", defrost: "3" },
    { commodity: "Cabbage, Chinese", maxDays: "30-60", tempF: "32-39", tempC: "0-4", airVent: "5", defrost: "3" },
    { commodity: "Cabbage, green, red, savory", maxDays: "90-180", tempF: "32", tempC: "0", airVent: "20", defrost: "3" },
    { commodity: "Cantaloupes", maxDays: "10-14", tempF: "38-40", tempC: "3-4", airVent: "20", defrost: "6" },
    { commodity: "Carrots, topped", maxDays: "28-180", tempF: "32", tempC: "0", airVent: "5", defrost: "3" },
    { commodity: "Casaba melons", maxDays: "21-28", tempF: "50", tempC: "10", airVent: "20", defrost: "3" },
    { commodity: "Cassava", maxDays: "14-21", tempF: "56", tempC: "13", airVent: "none", defrost: "3" },
    { commodity: "Cauliflower", maxDays: "20-30", tempF: "32", tempC: "0", airVent: "20", defrost: "3" },
    { commodity: "Celeriac", maxDays: "180-240", tempF: "32", tempC: "0", airVent: "5", defrost: "3" },
    { commodity: "Celery", maxDays: "14-28", tempF: "32-39", tempC: "0-4", airVent: "20", defrost: "3" },
    { commodity: "Chard", maxDays: "10-14", tempF: "32", tempC: "0", airVent: "20", defrost: "3" },
    { commodity: "Chayotes", maxDays: "8-10", tempF: "45", tempC: "7", airVent: "5", defrost: "3" },
    { commodity: "Chicory", maxDays: "14-28", tempF: "32", tempC: "0", airVent: "20", defrost: "3" },
    { commodity: "Collards", maxDays: "10-14", tempF: "32", tempC: "0", airVent: "20", defrost: "3" },
    { commodity: "Corn, sweet", maxDays: "4-6", tempF: "32", tempC: "0", airVent: "5", defrost: "3" },
    { commodity: "Crenshaw melons", maxDays: "14-21", tempF: "50", tempC: "10", airVent: "20", defrost: "3" },
    { commodity: "Cucumbers", maxDays: "10-14", tempF: "54-61", tempC: "12-16", airVent: "20", defrost: "3" },
    { commodity: "Dasheen or taro", maxDays: "42-140", tempF: "56", tempC: "13", airVent: "none", defrost: "3" },
    { commodity: "Eggplant", maxDays: "10-14", tempF: "50", tempC: "10", airVent: "5", defrost: "3" },
    { commodity: "Endive (escarole)", maxDays: "10-17", tempF: "32", tempC: "0", airVent: "10", defrost: "3" },
    { commodity: "Garlic", maxDays: "90-210", tempF: "28.5-32", tempC: "-2-0", airVent: "5", defrost: "3" },
    { commodity: "Ginger", maxDays: "90-180", tempF: "56", tempC: "13", airVent: "5", defrost: "6" },
    { commodity: "Greens, leafy", maxDays: "10-14", tempF: "32", tempC: "0", airVent: "20", defrost: "6" },
    { commodity: "Honey melons (untreated)", maxDays: "21-28", tempF: "45-50", tempC: "7-10", airVent: "20", defrost: "6" },
    { commodity: "Honey melons (C2 H4 treated)", maxDays: "21-28", tempF: "41", tempC: "5", airVent: "5", defrost: "6" },
    { commodity: "Horseradish", maxDays: "300-350", tempF: "32", tempC: "0", airVent: "none", defrost: "6" },
    { commodity: "Kohlrabi", maxDays: "25-30", tempF: "32", tempC: "0", airVent: "10", defrost: "6" },
    { commodity: "Leeks, green", maxDays: "30-60", tempF: "32", tempC: "0", airVent: "5", defrost: "6" },
    { commodity: "Lettuce", maxDays: "10-17", tempF: "32-39", tempC: "0-4", airVent: "10", defrost: "6" },
    { commodity: "Mushrooms", maxDays: "4-10", tempF: "32", tempC: "0", airVent: "5", defrost: "6" },
    { commodity: "Okra", maxDays: "7-10", tempF: "50", tempC: "10", airVent: "10", defrost: "6" },
    { commodity: "Onions, dry", maxDays: "30-180", tempF: "32-39", tempC: "0-4", airVent: "10", defrost: "6" },
    { commodity: "Onions, green", maxDays: "7-10", tempF: "32", tempC: "0", airVent: "10", defrost: "6" },
    { commodity: "Parsley", maxDays: "30-60", tempF: "32", tempC: "0", airVent: "20", defrost: "6" },
    { commodity: "Parsnips", maxDays: "60-120", tempF: "32-39", tempC: "0-4", airVent: "none", defrost: "6" },
    { commodity: "Peas", maxDays: "7-10", tempF: "32-39", tempC: "0-4", airVent: "20", defrost: "6" },
    { commodity: "Peppers, bell (sweet)", maxDays: "12-18", tempF: "45-50", tempC: "7-10", airVent: "10", defrost: "6" },
    { commodity: "Peppers, chili", maxDays: "14-21", tempF: "45-50", tempC: "7-10", airVent: "10", defrost: "6" },
    { commodity: "Persians melons", maxDays: "14-21", tempF: "50", tempC: "10", airVent: "20", defrost: "6" },
    { commodity: "Potatoes, processing", maxDays: "56-175", tempF: "50-65", tempC: "10-18", airVent: "10", defrost: "6" },
    { commodity: "Potatoes, seed", maxDays: "84-175", tempF: "36-40", tempC: "2-4", airVent: "10", defrost: "6" },
    { commodity: "Pumpkins", maxDays: "60-90", tempF: "46-54", tempC: "8-12", airVent: "none", defrost: "6" },
    { commodity: "Radishes", maxDays: "10-17", tempF: "32-39", tempC: "0-4", airVent: "5", defrost: "6" },
    { commodity: "Rhubarb", maxDays: "14-21", tempF: "32-39", tempC: "0-4", airVent: "5", defrost: "6" },
    { commodity: "Rutabagas", maxDays: "60-120", tempF: "32", tempC: "0", airVent: "5", defrost: "6" },
    { commodity: "Salsify", maxDays: "60-120", tempF: "32", tempC: "0", airVent: "5", defrost: "6" },
    { commodity: "Spinach", maxDays: "5-10", tempF: "32", tempC: "0", airVent: "20", defrost: "6" },
    { commodity: "Squash, soft-skin (summer)", maxDays: "7-14", tempF: "45-50", tempC: "7-10", airVent: "10", defrost: "6" },
    { commodity: "Squash, hard-skin (winter)", maxDays: "84-150", tempF: "50-55", tempC: "10-13", airVent: "none", defrost: "6" },
    { commodity: "Sweet potatoes", maxDays: "90-180", tempF: "56", tempC: "13", airVent: "none", defrost: "6" },
    { commodity: "Temarinds", maxDays: "21-28", tempF: "45", tempC: "7", airVent: "5", defrost: "6" },
    { commodity: "Tomatoes, mature green/breaker", maxDays: "21-28", tempF: "54-58", tempC: "12-14", airVent: "20", defrost: "6" },
    { commodity: "Tomatoes, turning/light pink", maxDays: "7-14", tempF: "50", tempC: "10", airVent: "20", defrost: "6" },
    { commodity: "Turnips, roots", maxDays: "60-120", tempF: "32", tempC: "0", airVent: "5", defrost: "6" },
    { commodity: "Turnips, green", maxDays: "10-14", tempF: "32", tempC: "0", airVent: "5", defrost: "6" },
    { commodity: "Water chestnuts", maxDays: "100-128", tempF: "40-45", tempC: "4-7", airVent: "5", defrost: "6" },
    { commodity: "Watercress", maxDays: "4-7", tempF: "32", tempC: "0", airVent: "20", defrost: "5" },
    { commodity: "Watermelons", maxDays: "14-21", tempF: "50", tempC: "10", airVent: "none", defrost: "5" },
    { commodity: "Yams", maxDays: "50-115", tempF: "56-60", tempC: "13-16", airVent: "none", defrost: "5" },
    { commodity: "Yucca", maxDays: "10-14", tempF: "50", tempC: "10", airVent: "none", defrost: "5" }
  ];

  // Fruit Data
  const fruitData = [
    { commodity: "Acerola", maxDays: "50-58", tempF: "32", tempC: "0", airVent: "5", defrost: "6" },
    { commodity: "Apples", maxDays: "90-240", tempF: "32-39", tempC: "0-4", airVent: "5", defrost: "6" },
    { commodity: "Apricots", maxDays: "7-14", tempF: "31", tempC: "-1", airVent: "10", defrost: "6" },
    { commodity: "Avocados", maxDays: "14-28", tempF: "40-50", tempC: "4-10", airVent: "10", defrost: "6" },
    { commodity: "Bananas", maxDays: "7-28", tempF: "57", tempC: "14", airVent: "10", defrost: "6" },
    { commodity: "Blackberry", maxDays: "2-3", tempF: "31", tempC: "-1", airVent: "5", defrost: "6" },
    { commodity: "Blueberry", maxDays: "10-18", tempF: "31", tempC: "-1", airVent: "5", defrost: "6" },
    { commodity: "Cranberry", maxDays: "60-120", tempF: "36-40", tempC: "2-4", airVent: "5", defrost: "6" },
    { commodity: "Currants", maxDays: "7-14", tempF: "31", tempC: "1", airVent: "5", defrost: "6" },
    { commodity: "Dewberry", maxDays: "2-3", tempF: "31", tempC: "-1", airVent: "5", defrost: "6" },
    { commodity: "Elderberry", maxDays: "5-14", tempF: "31", tempC: "-1", airVent: "5", defrost: "6" },
    { commodity: "Gooseberry", maxDays: "14-28", tempF: "31", tempC: "-1", airVent: "5", defrost: "6" },
    { commodity: "Loganberry", maxDays: "2-3", tempF: "31", tempC: "-1", airVent: "5", defrost: "6" },
    { commodity: "Raspberry", maxDays: "2-3", tempF: "31", tempC: "-1", airVent: "5", defrost: "6" },
    { commodity: "Strawberry", maxDays: "5-10", tempF: "31", tempC: "-1", airVent: "10", defrost: "6" },
    { commodity: "Breadfruit", maxDays: "14-40", tempF: "56", tempC: "13", airVent: "20", defrost: "6" },
    { commodity: "Chaimito", maxDays: "20-25", tempF: "38", tempC: "3", airVent: "5", defrost: "6" },
    { commodity: "Cherries, sour", maxDays: "3-7", tempF: "31-31", tempC: "-0.6-0", airVent: "5", defrost: "6" },
    { commodity: "Cherries, sweet", maxDays: "14-21", tempF: "30-32", tempC: "-1.1-0", airVent: "5", defrost: "6" },
    { commodity: "Cherimoya", maxDays: "14-28", tempF: "54", tempC: "12", airVent: "10", defrost: "6" },
    { commodity: "Coconuts", maxDays: "25-56", tempF: "32-35", tempC: "0-2", airVent: "none", defrost: "6" },
    { commodity: "Dates", maxDays: "24-52", tempF: "32", tempC: "0", airVent: "5", defrost: "6" },
    { commodity: "Durian", maxDays: "42-56", tempF: "39", tempC: "4", airVent: "5", defrost: "6" },
    { commodity: "Figs", maxDays: "7-10", tempF: "32", tempC: "0", airVent: "10", defrost: "6" },
    { commodity: "Grapefruit (California, Arizona)", maxDays: "28-42", tempF: "48-60", tempC: "9-16", airVent: "5", defrost: "6" },
    { commodity: "Grapefruit (Florida, Texas)", maxDays: "28-42", tempF: "48-60", tempC: "9-13", airVent: "0-45", defrost: "6" },
    { commodity: "Grapefruit (Mexico)", maxDays: "28-42", tempF: "48-58", tempC: "9-14", airVent: "5", defrost: "6" },
    { commodity: "Grapes", maxDays: "56-180", tempF: "30-32", tempC: "-1.1-0", airVent: "5", defrost: "6" },
    { commodity: "Guava", maxDays: "14-21", tempF: "50", tempC: "10", airVent: "10", defrost: "6" },
    { commodity: "Jackfruit", maxDays: "14-45", tempF: "56", tempC: "13", airVent: "20", defrost: "6" },
    { commodity: "Kiwi fruit (Chinese gooseberry)", maxDays: "28-84", tempF: "32", tempC: "0", airVent: "25", defrost: "6" },
    { commodity: "Lemons", maxDays: "30-180", tempF: "38-56", tempC: "3-13", airVent: "20", defrost: "6" },
    { commodity: "Limes (Persian, Tahiti)", maxDays: "21-35", tempF: "48-52", tempC: "9-11", airVent: "20", defrost: "6" },
    { commodity: "Limes (Mexican, Key)", maxDays: "10-15", tempF: "52", tempC: "11", airVent: "20", defrost: "6" },
    { commodity: "Langsat", maxDays: "10-15", tempF: "52", tempC: "11", airVent: "5", defrost: "6" },
    { commodity: "Lychee", maxDays: "21-35", tempF: "35", tempC: "2", airVent: "5", defrost: "6" },
    { commodity: "Mangoes", maxDays: "14-25", tempF: "42-55", tempC: "6-13", airVent: "20", defrost: "6" },
    { commodity: "Mangosteens", maxDays: "14-25", tempF: "56", tempC: "13", airVent: "20", defrost: "6" },
    { commodity: "Nectarines", maxDays: "14-28", tempF: "31", tempC: "-1", airVent: "20", defrost: "6" },
    { commodity: "Olives", maxDays: "28-42", tempF: "45", tempC: "7", airVent: "20", defrost: "6" },
    { commodity: "Oranges (California, Arizona)", maxDays: "20-56", tempF: "38-45", tempC: "3-7", airVent: "20", defrost: "6" },
    { commodity: "Oranges (Florida, Texas)", maxDays: "56-84", tempF: "32-36", tempC: "0-2", airVent: "20", defrost: "6" },
    { commodity: "Papaya", maxDays: "7-21", tempF: "45-54", tempC: "7-12", airVent: "20", defrost: "6" },
    { commodity: "Passion fruit", maxDays: "14-21", tempF: "54", tempC: "12", airVent: "20", defrost: "6" },
    { commodity: "Peaches", maxDays: "14-28", tempF: "31", tempC: "-1", airVent: "20", defrost: "6" },
    { commodity: "Pears (Anjou, 20th Century Asian)", maxDays: "120-180", tempF: "30-31", tempC: "1.1-0.6", airVent: "10", defrost: "6" },
    { commodity: "Pears (Bosc, Bartlett)", maxDays: "60-90", tempF: "30", tempC: "-1", airVent: "10", defrost: "6" },
    { commodity: "Persimmon (Fuyu)", maxDays: "35-84", tempF: "50", tempC: "10", airVent: "20", defrost: "6" },
    { commodity: "Persimmon (Hachiya)", maxDays: "50-90", tempF: "41", tempC: "5", airVent: "20", defrost: "6" },
    { commodity: "Pineapple", maxDays: "14-36", tempF: "50", tempC: "10", airVent: "5", defrost: "6" },
    { commodity: "Plantaints", maxDays: "10-35", tempF: "48-58", tempC: "9-14", airVent: "10", defrost: "6" },
    { commodity: "Plums and Prunes", maxDays: "14-28", tempF: "31", tempC: "-1", airVent: "20", defrost: "6" },
    { commodity: "Pomegranates", maxDays: "28-56", tempF: "32-41", tempC: "0-5", airVent: "5", defrost: "6" },
    { commodity: "Quinces", maxDays: "60-90", tempF: "31", tempC: "-1", airVent: "20", defrost: "6" },
    { commodity: "Rambutan", maxDays: "7-21", tempF: "54", tempC: "12", airVent: "20", defrost: "6" },
    { commodity: "Sapote", maxDays: "14-21", tempF: "54", tempC: "12", airVent: "20", defrost: "6" },
    { commodity: "Tamarillos", maxDays: "28-42", tempF: "32", tempC: "0", airVent: "10", defrost: "6" },
    { commodity: "Tangerines and Mandarin Oranges", maxDays: "14-28", tempF: "38-40", tempC: "3-4", airVent: "20", defrost: "6" },
    { commodity: "Uglifruit", maxDays: "14-21", tempF: "40", tempC: "4", airVent: "none", defrost: "6" },
    { commodity: "Frozen Vegetables and Fruits", maxDays: ".", tempF: "0", tempC: "-18", airVent: "none", defrost: "6" }
  ];

  // Meat & Poultry Data
  const meatData = [
    { commodity: "Beef, Horse, Lamb, Pork, Poultry, Veal", maxDays: "14-28", tempF: "29", tempC: "-2", category: "Fresh Meats" },
    { commodity: "Beef, Horse, Lamb, Pork, Poultry, Veal", maxDays: "", tempF: "-5", tempC: "-21", category: "Frozen Meats" },
    { commodity: "Fatty Fish (herring, mackerel)", maxDays: ".", tempF: "-10 to -5", tempC: "-23 ~ -21", category: "Frozen Fish" },
    { commodity: "Lean Fish", maxDays: ".", tempF: "-10 to -5", tempC: "-23 ~ -21", category: "Frozen Fish" },
    { commodity: "Shrimp, Scallops", maxDays: ".", tempF: "-5 to 0", tempC: "-23 ~ -18", category: "Frozen Fish" },
    { commodity: "Crab, Lobster", maxDays: ".", tempF: "-10 to -5", tempC: "-23 ~ -21", category: "Frozen Fish" },
    { commodity: "Bacon-slab", maxDays: "21-28", tempF: "27", tempC: "-3", category: "Processed Meats" },
    { commodity: "Bacon-slice", maxDays: "", tempF: "27", tempC: "-3", category: "Processed Meats" },
    { commodity: "Bologna, franks", maxDays: "", tempF: "27", tempC: "-3", category: "Processed Meats" },
    { commodity: "Braunschweigher, liver sausage, and liver loaves", maxDays: "", tempF: "27", tempC: "-3", category: "Processed Meats" },
    { commodity: "Dried beef (sliced)", maxDays: "", tempF: "41", tempC: "5", category: "Processed Meats" },
    { commodity: "Hams-baked, boiled, ready to eat", maxDays: "", tempF: "28", tempC: "-2", category: "Processed Meats" },
    { commodity: "Hams-smoked", maxDays: "", tempF: "27", tempC: "-3", category: "Processed Meats" },
    { commodity: "Port sausage", maxDays: "", tempF: "27", tempC: "-3", category: "Processed Meats" },
    { commodity: "Sausage (country and Polish)", maxDays: "", tempF: "27", tempC: "-3", category: "Processed Meats" }
  ];

  // Poultry, Eggs & Dairy Data
  const dairyData = [
    { commodity: "Poultry : Fresh, ice-packed", maxDays: ".", tempF: "33", tempC: "1", category: "Poultry" },
    { commodity: "Poultry : Fresh, chilled", maxDays: ".", tempF: "29", tempC: "-2", category: "Poultry" },
    { commodity: "Eggs", maxDays: "180", tempF: "33-38", tempC: "1-3", category: "Eggs" },
    { commodity: "Natural Cheese (brick, cheddar, Camembert, Neufchatel)", maxDays: "30-40", tempF: "30-34", tempC: "-1~1", category: "Cheese" },
    { commodity: "Natural Cheese (cottage, cream, Limberger, Swiss)", maxDays: "", tempF: "32-34", tempC: "0~1", category: "Cheese" },
    { commodity: "Process Cheese (American, brick, Limberger, Swiss)", maxDays: "", tempF: "38-45", tempC: "3~7", category: "Cheese" },
    { commodity: "Roquefort (natural)", maxDays: "", tempF: "30-34", tempC: "-1~1", category: "Cheese" },
    { commodity: "Swiss (natural)", maxDays: "", tempF: "30-34", tempC: "-1~1", category: "Cheese" },
    { commodity: "Cheeses foods", maxDays: "", tempF: "40-45", tempC: "4~7", category: "Cheese" },
    { commodity: "Butter Fresh", maxDays: "", tempF: "38-42", tempC: "3~6", category: "Butter" },
    { commodity: "Butter Frozen", maxDays: "", tempF: "-5", tempC: "-21", category: "Butter" },
    { commodity: "Margarine", maxDays: "", tempF: "35", tempC: "2", category: "Butter" },
    { commodity: "Ice creams", maxDays: "", tempF: "-15", tempC: "-26", category: "Ice Cream" },
    { commodity: "Batteries", maxDays: "", tempF: "45", tempC: "7", category: "Miscellaneous" },
    { commodity: "Candy", maxDays: "", tempF: "60", tempC: "16", category: "Miscellaneous" },
    { commodity: "Christmas trees", maxDays: "", tempF: "32", tempC: "0", category: "Miscellaneous" },
    { commodity: "Film/photographic chemical", maxDays: "", tempF: "50", tempC: "10", category: "Miscellaneous" }
  ];

  const categories = [
    { id: "vegetables", name: "Fresh Vegetables & Melons", count: vegetableData.length },
    { id: "fruits", name: "Fresh Fruits", count: fruitData.length },
    { id: "meat", name: "Meat & Poultry", count: meatData.length },
    { id: "dairy", name: "Dairy & Other Products", count: dairyData.length }
  ];

  const getCurrentData = () => {
    switch(activeCategory) {
      case "vegetables": return vegetableData;
      case "fruits": return fruitData;
      case "meat": return meatData;
      case "dairy": return dairyData;
      default: return vegetableData;
    }
  };

  const currentData = getCurrentData();
  const displayedData = showAll ? currentData : currentData.slice(0, 15);

  const filteredData = searchTerm 
    ? displayedData.filter(item => item.commodity.toLowerCase().includes(searchTerm.toLowerCase()))
    : displayedData;

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[45vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/container.jpg"
            alt="Shelf Life Guide"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-0.5 bg-white/60 rounded-full"></div>
                <span className="text-white/70 text-sm tracking-wider">Technical Guide</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Shelf Life & 
                <span className="text-white/90 block text-2xl md:text-3xl mt-1">Container Temperature Setting</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl">
                Comprehensive reference guide for optimal storage conditions of perishable commodities
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Temperature Guidelines Summary - Left Content + Right Cards */}
<section className="py-12 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      
      {/* Left Side - Content */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-0.5 bg-[#041367] rounded-full"></div>
          <span className="text-[#041367] font-semibold text-sm uppercase tracking-wider">Temperature Guide</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Recommended <span className="text-[#041367]">Temperature Settings</span>
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Proper temperature control is essential for maintaining the quality and extending the shelf life of perishable commodities. Our reefers are equipped with advanced temperature monitoring systems to ensure optimal conditions throughout the journey.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#041367]/10 rounded-lg flex items-center justify-center">
              <Thermometer className="w-4 h-4 text-[#041367]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Precise Temperature Control</p>
              <p className="text-xs text-gray-500">Digital electronic circuit for accuracy</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#041367]/10 rounded-lg flex items-center justify-center">
              <Clock className="w-4 h-4 text-[#041367]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">24/7 Remote Monitoring</p>
              <p className="text-xs text-gray-500">Real-time temperature tracking</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#041367]/10 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-[#041367]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Quality Assurance</p>
              <p className="text-xs text-gray-500">Maintaining optimum conditions during voyage</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Cards Grid (2 columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Fresh Vegetables Card */}
        <div className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer h-[160px]">
          <div className="absolute inset-0">
            <img
              src="/images/veg.avif"
              alt="Fresh Vegetables"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/50" />
          </div>
          <div className="relative p-4 text-center z-10 flex flex-col items-center justify-center h-full">
            <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mx-auto mb-2">
              <Thermometer className="w-5 h-5 text-white" />
            </div>
            <div className="text-xs font-semibold text-white">Fresh Vegetables</div>
            <div className="text-[10px] text-white/80 mt-1">32°F - 50°F (0°C - 10°C)</div>
          </div>
        </div>

        {/* Fresh Fruits Card */}
        <div className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer h-[160px]">
          <div className="absolute inset-0">
            <img
              src="/images/fruite.PNG"
              alt="Fresh Fruits"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/50" />
          </div>
          <div className="relative p-4 text-center z-10 flex flex-col items-center justify-center h-full">
            <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mx-auto mb-2">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div className="text-xs font-semibold text-white">Fresh Fruits</div>
            <div className="text-[10px] text-white/80 mt-1">30°F - 60°F (-1°C - 16°C)</div>
          </div>
        </div>

        {/* Fresh Meats Card */}
        <div className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer h-[160px]">
          <div className="absolute inset-0">
            <img
              src="/images/meat.avif"
              alt="Fresh Meats"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/50" />
          </div>
          <div className="relative p-4 text-center z-10 flex flex-col items-center justify-center h-full">
            <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mx-auto mb-2">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div className="text-xs font-semibold text-white">Fresh Meats</div>
            <div className="text-[10px] text-white/80 mt-1">29°F - 33°F (-2°C - 1°C)</div>
          </div>
        </div>

        {/* Frozen Products Card */}
        <div className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer h-[160px]">
          <div className="absolute inset-0">
            <img
              src="/images/frozen.PNG"
              alt="Frozen Products"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/50" />
          </div>
          <div className="relative p-4 text-center z-10 flex flex-col items-center justify-center h-full">
            <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mx-auto mb-2">
              <Snowflake className="w-5 h-5 text-white" />
            </div>
            <div className="text-xs font-semibold text-white">Frozen Products</div>
            <div className="text-[10px] text-white/80 mt-1">-15°F to 0°F (-26°C to -18°C)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Header Section */}
<section className="py-8 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="text-center">
      <div className="inline-flex items-center gap-2 mb-3 bg-[#041367]/10 px-4 py-1.5 rounded-full">
        <Thermometer className="w-4 h-4 text-[#041367]" />
        <span className="text-[#041367] font-semibold text-xs uppercase tracking-wider">Reference Guide</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 -mb-2">
        Shelf Life & <span className="text-[#041367]">Temperature Reference</span>
      </h2>
    
    </div>
  </div>
</section>
     {/* Search Bar */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search commodity..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#041367] focus:border-transparent"
            />
          </div>
        </div>
      </section>

     
        {/* Category Tabs */}
      <div className="sticky top-[80px] z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-3 py-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${
                  activeCategory === category.id
                    ? "bg-[#041367] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.name}
               
              </button>
            ))}
          </div>
        </div>
      </div>

       

      {/* Data Table */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#041367] text-white">
                  <th className="text-left p-3 font-semibold rounded-tl-lg">Commodity</th>
                  <th className="text-left p-3 font-semibold">Max. Transit Shelf Life (Days)</th>
                  <th className="text-left p-3 font-semibold">Recommended Container Temp (°F)</th>
                  <th className="text-left p-3 font-semibold">Recommended Container Temp (°C)</th>
                  <th className="text-left p-3 font-semibold">Air Vent Open (%)</th>
                  <th className="text-left p-3 font-semibold rounded-tr-lg">Defrost Interval (hrs)</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, idx) => (
                  <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="p-3 text-gray-800 font-medium text-xs">{item.commodity}</td>
                    <td className="p-3 text-gray-600 text-xs">{item.maxDays}</td>
                    <td className="p-3 text-gray-600 text-xs">{item.tempF}</td>
                    <td className="p-3 text-gray-600 text-xs">{item.tempC}</td>
                    <td className="p-3 text-gray-600 text-xs">{item.airVent}</td>
                    <td className="p-3 text-gray-600 text-xs">{item.defrost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {(currentData.length > 15 || (searchTerm && filteredData.length < currentData.length)) && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-6 py-2 bg-[#041367] text-white rounded-lg font-semibold text-sm hover:bg-[#041367]/90 transition-all"
              >
                {showAll ? 'Show Less' : `Show All (${currentData.length} items)`}
                <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/global.avif"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#041367]/95 to-[#041367]/85" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Need Technical Assistance?</h3>
          <p className="text-white/80 mb-6 text-sm max-w-2xl mx-auto">
            Contact our reefer specialists for detailed guidance on temperature settings
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#041367] rounded-lg font-semibold text-sm hover:shadow-xl transition-all">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/request-quote">
              <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur border border-white/30 text-white rounded-lg font-semibold text-sm hover:bg-white/20 transition-all">
                Request Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}