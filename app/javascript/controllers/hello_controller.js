import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["heading"]
  connect() {
    console.log("hello from StimulusJS")
  }

  greet() {
    this.headingTarget.innerHTML = "Hello World"
  }
}
