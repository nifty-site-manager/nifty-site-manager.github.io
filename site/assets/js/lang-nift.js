/**
 * @license
 * Copyright (C) 2008 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview
 * Registers a language handler for Nift. Modified from:
 *   https://github.com/google/code-prettify/blob/master/src/lang-lua.js
 *
 * To use, include prettify.js and this file in your HTML page.
 * Then put your code in an HTML tag like
 *      <pre class="prettyprint lang-nift">(my Nift code)</pre>
 *
 * @author contact@n-ham.com
 */

PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
         // Whitespace
         [PR['PR_PLAIN'],       /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
         // A double or single quoted, possibly multi-line, string.
         [PR['PR_STRING'],      /^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])*(?:\'|$))/, null, '"\'']
        ],
        [
         // /*comments*/
         [PR['PR_COMMENT'], /^\/\*[\s\S]*?(?:\*\/|$)/, null],
         // //comments
         [PR['PR_COMMENT'], /^\/\/[\s\S]*?(?:\n|$)/, null],
         // #comments
         [PR['PR_COMMENT'], /^\#[\s\S]*?(?:\n|$)/, null],
         // --[[comments]]--
         [PR['PR_COMMENT'], /^--\[\[[\s\S]*?(?:\]\]--|$)/, null],
         // --comments
         [PR['PR_COMMENT'], /^--[\s\S]*?(?:\n|$)/, null],
         // @---comments@---
         [PR['PR_COMMENT'], /^\@---[\s\S]*?(?:\@---|$)/, null],
         
         // A long bracketed block not preceded by -- is a string
         [PR['PR_STRING'],  /^\[(=*)\[[\s\S]*?(?:\]\1\]|$)/],
         [PR['PR_KEYWORD'], /^(?:and|begin|break|console|const|do|else|elseif|end|endl|exit|false|for|function|if|in|local|nil|not|option|options|or|param|params|print|private|quit|read|repeat|return|require|start|struct|then|true|until|while|write)\b/, null],
         [PR['PR_KEYWORD'], /^(?:bin|cd|del|dir|copy|cp|ls|move|mv|remove|rm|sudo|usr)\b/, null],
         [PR['PR_LITERAL'], /^(?:lua|lua_addnsmfns|lua_getglobal|lua_gettop|lua_pop|lua_pushlightuserdata|lua_pushnumber|lua_pushstring|lua_remove|lua_setglobal|lua_tonumber|lua_tostring|nsm_setnumber|nsm_setstring|nsm_tolightuserdata|nsm_tonumber|nsm_tostring|nsm_write|:=)\b/, null],
         [PR['PR_LITERAL'], /^(?:exprtk|exprtk.add_package)\b/, null],
         [PR['PR_TYPE'], /^(?:bool|char|double|fstream|ifstream|istream|int|iterable|long long int|name|number|ofstream|ostream|path|source|stream|string|target|var|variable|std::bool|std::char|std::double|std::int|std::long long int|std::string)\b/, null],
         // operations and order relations
         [PR['PR_DECLARATION'], /^(?:->|<-|<=|>=)/, null],
         // := and :
         [PR['PR_LITERAL'], /^(?::=|:)/, null],
         // n++ functions
         [PR['PR_LITERAL'], /^@(?:\[(=*)\[[\s\S]*?(?:\]\1\]|$)|[^ ({[\r\n]*)/],
         // A number is a hex integer literal, a decimal real literal, or in scientific notation
         [PR['PR_TYPE'], /^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],
         // An identifier
         [PR['PR_PLAIN'], /^[a-z_]\w*/i],
         // A run of punctuation
         [PR['PR_PUNCTUATION'], /^[^\w\t\n\r \xA0][^\w\t\n\r \xA0\"\'\-\+=]*/]
        ]),
    ['nift']);
