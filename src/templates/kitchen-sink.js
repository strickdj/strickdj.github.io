import React from "react"
import { graphql } from "gatsby"

import { Layout } from "@components"
import SEO from "../components/seo"

const KitchenSinkPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const preText = `
     pre {
      display: block;
      padding: 7px;
      background-color: #F5F5F5;
      border: 1px solid #E1E1E8;
      border-radius: 3px;
      white-space: pre-wrap;
      word-break: break-all;
      font-family: Menlo, Monaco;
      line-height: 160%;
    }
  `
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Kitchen Sink" />

      <div>
        <h1>Kitchen Sink</h1>
      </div>

      <h2>Colors</h2>

      <div className={`flex flex-wrap`}>
        <div className={`mx-1 p-1`}>
          <h3 className={`text-black`}>text-black</h3>
          <h3 className={`text-black-90`}>text-black-90</h3>
          <h3 className={`text-black-70`}>text-black-70</h3>
          <h3 className={`text-black-50`}>text-black-50</h3>
          <h3 className={`text-black-30`}>text-black-30</h3>
          <h3 className={`text-black-10`}>text-black-10</h3>
        </div>
        <div className={`bg-black mx-1 p-1`}>
          <h3 className={`text-white`}>text-white</h3>
          <h3 className={`text-white-90`}>text-white-90</h3>
          <h3 className={`text-white-70`}>text-white-70</h3>
          <h3 className={`text-white-50`}>text-white-50</h3>
          <h3 className={`text-white-30`}>text-white-30</h3>
          <h3 className={`text-white-10`}>text-white-10</h3>
        </div>
        <div className={`bg-black mx-1 p-1`}>
          <h3 className={`text-beige`}>text-beige</h3>
          <h3 className={`text-beige`}>text-beige</h3>
          <h3 className={`text-beige`}>text-beige</h3>
          <h3 className={`text-beige`}>text-beige</h3>
          <h3 className={`text-beige`}>text-beige</h3>
          <h3 className={`text-beige`}>text-beige</h3>
        </div>
        <div className={`bg-black mx-1 p-1`}>
          <h3 className={`text-comb`}>text-comb</h3>
          <h3 className={`text-comb`}>text-comb</h3>
          <h3 className={`text-comb`}>text-comb</h3>
          <h3 className={`text-comb-dark`}>text-comb-dark</h3>
          <h3 className={`text-comb-dark`}>text-comb-dark</h3>
          <h3 className={`text-comb-dark`}>text-comb-dark</h3>
        </div>
        <div className={`bg-black mx-1 p-1`}>
          <h3 className={`text-beak`}>text-beak</h3>
          <h3 className={`text-beak`}>text-beak</h3>
          <h3 className={`text-beak`}>text-beak</h3>
          <h3 className={`text-beak`}>text-beak</h3>
          <h3 className={`text-beak`}>text-beak</h3>
          <h3 className={`text-beak`}>text-beak</h3>
        </div>
        <div className={`bg-black mx-1 p-1`}>
          <h3 className={`text-foot`}>text-foot</h3>
          <h3 className={`text-foot`}>text-foot</h3>
          <h3 className={`text-foot`}>text-foot</h3>
          <h3 className={`text-foot`}>text-foot</h3>
          <h3 className={`text-foot`}>text-foot</h3>
          <h3 className={`text-foot`}>text-foot</h3>
        </div>
        <div className={`mx-1 p-1`}>
          <h3 className={`text-feather`}>text-feather</h3>
          <h3 className={`text-feather-grey`}>text-feather-grey</h3>
          <h3 className={`text-feather-dark`}>text-feather-dark</h3>
          <h3 className={`text-feather-black`}>text-feather-black</h3>
        </div>
        <div className={`mx-1 p-1`}>
          <h3 className={`text-t`}>text-t</h3>
          <h3 className={`text-t-green`}>text-t-green</h3>
          <h3 className={`text-t-teal`}>text-t-teal</h3>
          <h3 className={`text-t-purple`}>text-t-purple</h3>
        </div>
      </div>

      <hr className={``} />

      <section>
        <hgroup>
          <h1>h1 HTML5 Kitchen Sink</h1>
          <h2>
            h2 Back in my quaint <a href="#foo">garden</a>
          </h2>
          <h3>
            h3 Jaunty <a href="#foo">zinnias</a> vie with flaunting phlox
          </h3>
          <h4>
            h4 Five or six big jet planes zoomed quickly by the new tower.
          </h4>
          <h5>
            h5 Expect skilled signwriters to use many jazzy, quaint old
            alphabets effectively.
          </h5>
          <h6>h6 Pack my box with five dozen liquor jugs.</h6>
        </hgroup>
      </section>
      <hr />
      <section id={`foo`}>
        <header>
          <nav>
            <ul>
              <li>
                <a href="#foo">Home</a>
              </li>
              <li>
                <a href="#foo">About</a>
              </li>
              <li>
                <a href="#foo">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <article>
          <p>
            This paragraph is nested inside an article. It contains many
            different, sometimes useful,{" "}
            <a href="https://www.w3schools.com/tags/">HTML5 tags</a>. Of course
            there are classics like <em>emphasis</em>,<strong>strong</strong>,
            and <small>small</small> but there are many others as well. Hover
            the following text for abbreviation tag:{" "}
            <abbr title="abbreviation">abbr</abbr>. Similarly, you can use
            acronym tag like this: <acronym title="For The Win">ftw</acronym>.
            You can define
            <del>deleted text</del>
            which often gets replaced with
            <ins>inserted</ins>
            text.
          </p>
          <p>
            You can also use <kbd>keyboard text</kbd>, which sometimes is styled
            similarly to the
            <code>&lt;code&gt;</code> or <samp>samp</samp> tags. Even more
            specifically, there is a tag just for
            <var>variables</var>. Not to be mistaken with blockquotes below, the
            quote tag lets you denote something as <q>quoted text</q>. Lastly
            don't forget the sub (H<sub>2</sub>O) and sup (E = MC<sup>2</sup>)
            tags.{" "}
          </p>
        </article>
        <aside>This is an aside.</aside>
        <footer>This is footer for this section</footer>
      </section>
      <hr />
      <section>
        <blockquote>
          <p>
            Blockquote: I quickly explained that many big jobs involve few
            hazards
          </p>
        </blockquote>
        <blockquote>
          <p>
            This is a mult-line blockquote with a cite reference. People think
            focus means saying yes to the thing you’ve got to focus on. But
            that’s not what it means at all. It means saying no to the hundred
            other good ideas that there are. You have to pick carefully. I’m
            actually as proud of the things we haven’tdone as the things I have
            done. Innovation is saying no to 1,000 things.
            <cite>
              Steve Jobs – Apple Worldwide Developers’ Conference, 1997
            </cite>
          </p>
        </blockquote>
      </section>
      <hr />
      <section>
        <table>
          <caption>Tables can have captions now.</caption>
          <tbody>
            <tr>
              <th>Person</th>
              <th>Number</th>
              <th>Third Column</th>
            </tr>
            <tr>
              <td>Someone Lastname</td>
              <td>900</td>
              <td>Nullam quis risus eget urna mollis ornare vel eu leo.</td>
            </tr>
            <tr>
              <td>
                <a href="#foo">Person Name</a>
              </td>
              <td>1200</td>
              <td>
                Vestibulum id ligula porta felis euismod semper. Donec
                ullamcorper nulla non metus auctor fringilla.
              </td>
            </tr>
            <tr>
              <td>Another Person</td>
              <td>1500</td>
              <td>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Nullam id dolor id nibh ultricies vehicula ut id elit.
              </td>
            </tr>
            <tr>
              <td>Last One</td>
              <td>2800</td>
              <td>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Cras mattis consectetur purus sit amet fermentum.
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <hr />
      <section>
        <dl>
          <dt>Definition List Title</dt>
          <dd>Definition list division.</dd>
          <dt>Kitchen Sink</dt>
          <dd>
            Used in expressions to describe work in which all conceivable (and
            some inconceivable) sources have been mined. In this case, a bunch
            of markup.
          </dd>
          <dt>aside</dt>
          <dd>Defines content aside from the page content</dd>
          <dt>blockquote</dt>
          <dd>Defines a section that is quoted from another source</dd>
        </dl>
      </section>
      <hr />
      <section>
        <ul>
          <li>
            Unordered List item one
            <ul>
              <li>
                Nested list item
                <ul>
                  <li>Level 3, item one</li>
                  <li>Level 3, item two</li>
                  <li>Level 3, item three</li>
                  <li>Level 3, item four</li>
                </ul>
              </li>
              <li>List item two</li>
              <li>List item three</li>
              <li>List item four</li>
            </ul>
          </li>
          <li>List item two</li>
          <li>List item three</li>
          <li>List item four</li>
        </ul>
        <hr />
        <ol>
          <li>
            List item one
            <ol>
              <li>
                List item one
                <ol>
                  <li>List item one</li>
                  <li>List item two</li>
                  <li>List item three</li>
                  <li>List item four</li>
                </ol>
              </li>
              <li>List item two</li>
              <li>List item three</li>
              <li>List item four</li>
            </ol>
          </li>
          <li>List item two</li>
          <li>List item three</li>
          <li>List item four</li>
        </ol>
      </section>
      <hr />
      <section>
        <address>
          1 Infinite Loop
          <br />
          Cupertino, CA 95014
          <br />
          United States
        </address>
      </section>
      <hr />
      <section>
        <pre>{preText}</pre>
      </section>
      <hr />

      <figure>
        <img alt={`fill murray`} src="https://www.fillmurray.com/505/314" />
        <figcaption>
          Fig1. A picture of Bill Murray from{" "}
          <a href="https://www.fillmurray.com/">fillmurray.com</a>
        </figcaption>
      </figure>

      <hr />
      <section>
        <form>
          <p>
            <label htmlFor="example-input-email">Email address</label>
            <input
              type="email"
              id="example-input-email"
              placeholder="Enter email"
            />
          </p>
          <p>
            <label htmlFor="example-input-number">Number</label>
            <input
              type="number"
              id="example-input-number"
              placeholder="Number"
            />
          </p>
          <p>
            <label htmlFor="example-input-password">Password</label>
            <input
              type="password"
              id="example-input-password"
              placeholder="Password"
            />
          </p>
          <p>
            <label htmlFor="example-input-search">Search</label>
            <input
              type="search"
              id="example-input-search"
              placeholder="Search .."
            />
          </p>
          <p>
            <label htmlFor="example-input-tel">Telephone number</label>
            <input
              type="tel"
              id="example-input-tel"
              placeholder="Telephone number"
            />
          </p>

          <p>
            <label htmlFor="example-input-text">Text</label>
            <input
              type="text"
              id="example-input-text"
              placeholder="Enter some text here"
            />
          </p>
          <p>
            <label htmlFor="example-input-url">Url</label>
            <input
              type="url"
              id="example-input-url"
              placeholder="Enter a url here"
            />
          </p>
          <p>
            <label htmlFor="example-input-color">Color</label>
            <input type="color" id="example-input-color" placeholder="#fff" />
          </p>
          <p>
            <label htmlFor="example-input-date">Date</label>
            <input type="date" id="example-input-date" placeholder="date" />
          </p>
          <p>
            <label htmlFor="example-input-date-time">Date / Time</label>
            <input
              type="datetime"
              id="example-input-date-time"
              placeholder="date / time"
            />
          </p>
          <p>
            <label htmlFor="example-input-date-time-local">
              Date / Time local
            </label>
            <input
              type="datetime-local"
              id="example-input-date-time-local"
              placeholder="date / time local"
            />
          </p>
          <p>
            <label htmlFor="example-input-month">Month</label>
            <input type="month" id="example-input-month" placeholder="Month" />
          </p>
          <p>
            <label htmlFor="example-input-week">Week</label>
            <input type="week" id="example-input-week" placeholder="Week" />
          </p>
          <p>
            <label htmlFor="example-input-time">Time</label>
            <input type="time" id="example-input-time" placeholder="Time" />
          </p>
          <p>
            <label htmlFor="example-select1">Example select</label>
            <select id="example-select1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </p>
          <p>
            <label htmlFor="example-select2">Example multiple select</label>
            <select multiple id="example-select2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </p>
          <p>
            <label htmlFor="example-textarea">Example textarea</label>
            <textarea id="example-textarea" rows="3" />
          </p>
          <p>
            <label htmlFor="example-input-file">File input</label>
            <input type="file" id="example-input-file" />
          </p>
          <fieldset>
            <legend>I am legend</legend>
            <div>
              <label>
                <input
                  type="radio"
                  name="options-radios"
                  id="optionsR-radios1"
                  value="option1"
                  defaultChecked={true}
                />{" "}
                Option one is this and that&mdash;be sure to include why it's
                great
              </label>
            </div>

            <div>
              <label>
                <input
                  type="radio"
                  name="options-radios"
                  id="options-radios2"
                  value="option2"
                />{" "}
                Option two can be something else and selecting it will deselect
                option one
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="optionsRadios"
                  id="options-radios3"
                  value="option3"
                  disabled
                />{" "}
                Option three is disabled
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>I am also legend</legend>
            <input type="checkbox" /> Check me out
            <input type="checkbox" /> Or check me out
          </fieldset>
          <p>
            <button type="button" name="button">
              Button
            </button>
            <input type="button" name="input" value="Input Button" />
            <input type="submit" name="submit" value="Submit Button" />
            <input type="reset" name="reset" value="Reset Button" />
          </p>
        </form>
      </section>
    </Layout>
  )
}

export default KitchenSinkPage

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `