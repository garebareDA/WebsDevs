import baseNumberIcon from "~/assets/image/icon/NumberBase.png";
import convertIcon from "~/assets/image/icon/Convert.png";
import htmlIcon from "~/assets/image/icon/HTML.png";
import base64Icon from "~/assets/image/icon/Base64.png";
import zipIcon from "~/assets/image/icon/Zip.png";
import jwtIcon from "~/assets/image/icon/Jwt.png";
import jsonIcon from "~/assets/image/icon/Json.png";
import sqlIcon from "~/assets/image/icon/Sql.png";
import xmlIcon from "~/assets/image/icon/Xml.png";
import hashIcon from "~/assets/image/icon/Hash.png";
import uuidIcon from "~/assets/image/icon/Uuid.png";
import liIcon from "~/assets/image/icon/Li.png";
import checkSumIcon from "~/assets/image/icon/CheckSum.png";
import textIcon from "~/assets/image/icon/Text.png";
import regexIcon from "~/assets/image/icon/Regex.png";
import diffIcon from "~/assets/image/icon/Diff.png";
import markDownIcon from "~/assets/image/icon/Markdown.png";
import colorBlindIcon from "~/assets/image/icon/Eye.png";
import imageIcon from "~/assets/image/icon/Image.png";
import imageConvertIcon from "~/assets/image/icon/ImageConverter.png";

type App = {
  name: string;
  icon: string;
  path: string;
}

type AppList = {
  list: App[];
  name: string;
}

const converters: App[] = [
  { name: "Number Base", icon: baseNumberIcon, path: "basenumber" },
  { name: "JSON<=>YAML", icon: convertIcon, path: "convert" }
];

const enDecoders: App[] = [
  { name: "HTML", icon: htmlIcon, path: "html" },
  { name: "Base64", icon: base64Icon, path: "base64" },
  { name: "Zip", icon: zipIcon, path: "zip" },
  { name: "JWT Decoder", icon: jwtIcon, path: "jwt" },
];

const formatters: App[] = [
  { name: "JSON Formatter", icon: jsonIcon, path: "jsonFormatter" },
  { name: "SQL Formatter", icon: sqlIcon, path: "sqlFormatter" },
  { name: "XML Formatter", icon: xmlIcon, path: "xmlFormatter" },
];

const generators: App[] = [
  { name: "Hash", icon: hashIcon, path: "hash" },
  { name: "UUID", icon: uuidIcon, path: "uuid" },
  { name: "Lorem Ipsum", icon: liIcon, path: "loremIpsum" },
  { name: "CheckSum", icon: checkSumIcon, path: "checkSum" },
];

const texts: App[] = [
  { name: "Case Converter", icon: textIcon, path: "text" },
  { name: "Regex", icon: regexIcon, path: "regex" },
  { name: "Text Diff", icon: diffIcon, path: "diff" },
  { name: "Markdown", icon: markDownIcon, path: "markdown" },
];

const graphics: App[] = [
  { name: "Color Blind", icon: colorBlindIcon, path: "colorBlind" },
  { name: "Image Compressor", icon: imageIcon, path: "imageCompressor" },
  { name: "Image Converter", icon: imageConvertIcon, path: "imageConverter" },
];

export const apps: AppList[] = [
  { list: converters, name: "Converters" },
  { list: enDecoders, name: "Encoders/Decoders" },
  { list: formatters, name: "Formatters" },
  { list: generators, name: "Generators" },
  { list: texts, name: "Texts" },
  { list: graphics, name: "Graphics" },
];