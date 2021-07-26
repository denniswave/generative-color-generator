class ColorGenerator {

  // Brightness
  br_r = 0.5
  br_g = 0.5
  br_b = 0.5

  // Contrast
  co_r = 0.5
  co_g = 0.5
  co_b = 0.5

  // Cosine oscilates c times
  cs_r = 1.0  
  cs_g = 1.0  
  cs_b = 1.0
  
  // Phase
  ph_r = 0.0
  ph_g = 0.33
  ph_b = 0.67

  setBrightness(r, g, b) {
    this.br_r = r
    this.br_g = g
    this.br_b = b 
  }

  setContrast(r, g, b) {
    this.co_r = r
    this.co_g = g
    this.co_b = b 
  }

  setOscilation(r, g, b) {
    this.cs_r = r
    this.cs_g = g
    this.cs_b = b 
  }

  setPhase(r, g, b) {
    this.ph_r = r
    this.ph_g = g
    this.ph_b = b 
  }

  setRandomBrightness() {
    this.br_r = random()
    this.br_g = random()
    this.br_b = random()

    return { 
      r: this.br_r,
      g: this.br_g,
      b: this.br_b
    }
  }

  setRandomContrast() {
    this.co_r = random()
    this.co_g = random()
    this.co_b = random()

    return { 
      r: this.co_r,
      g: this.co_g,
      b: this.co_b
    }
  }

  setRandomOscilation() {
    this.cs_r = random()
    this.cs_g = random()
    this.cs_b = random()

    return { 
      r: this.cs_r,
      g: this.cs_g,
      b: this.cs_b
    }
  }

  setRandomPhase() {
    this.ph_r = random()
    this.ph_g = random()
    this.ph_b = random()
    
    return { 
      r: this.ph_r,
      g: this.ph_g,
      b: this.ph_b
    }
  }

  generateColor(t) {
    const r = this.br_r + this.co_r * cos(2 * Math.PI * (this.cs_r * t + this.ph_r))
    const g = this.br_g + this.co_g * cos(2 * Math.PI * (this.cs_g * t + this.ph_g))
    const b = this.br_b + this.co_b * cos(2 * Math.PI * (this.cs_b * t + this.ph_b))
    return color(r * 255, g * 255, b * 255)
  }

  generateGreyscale(t) {
    const average_a = (this.br_r + this.br_g + this.br_b) / 3
    const average_b = (this.co_r + this.co_g + this.co_b) / 3
    const average_c = (this.cs_r + this.cs_g + this.cs_b) / 3
    const average_d = (this.ph_r + this.ph_g + this.ph_b) / 3
    return (average_a + average_b * cos(2 * Math.PI * (average_c * t + average_d))) * 255
  }

}