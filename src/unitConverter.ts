// UnitConverter.ts

export class UnitConverter {
  // Temperature conversions

  /**
   * Converts Celsius to Fahrenheit.
   * @param celsius - Temperature in degrees Celsius.
   * @returns Temperature in degrees Fahrenheit.
   */
  static celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9) / 5 + 32;
  }

  /**
   * Converts Fahrenheit to Celsius.
   * @param fahrenheit - Temperature in degrees Fahrenheit.
   * @returns Temperature in degrees Celsius.
   */
  static fahrenheitToCelsius(fahrenheit: number): number {
    return ((fahrenheit - 32) * 5) / 9;
  }

  /**
   * Converts Celsius to Kelvin.
   * @param celsius - Temperature in degrees Celsius.
   * @returns Temperature in Kelvin.
   */
  static celsiusToKelvin(celsius: number): number {
    return celsius + 273.15;
  }

  /**
   * Converts Kelvin to Celsius.
   * @param kelvin - Temperature in Kelvin.
   * @returns Temperature in degrees Celsius.
   */
  static kelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }

  // Mass conversions

  /**
   * Converts Kilograms to Pounds.
   * @param kg - Mass in kilograms.
   * @returns Mass in pounds.
   */
  static kilogramsToPounds(kg: number): number {
    return kg * 2.2046226218;
  }

  /**
   * Converts Pounds to Kilograms.
   * @param pounds - Mass in pounds.
   * @returns Mass in kilograms.
   */
  static poundsToKilograms(pounds: number): number {
    return pounds / 2.2046226218;
  }

  /**
   * Converts Grams to Ounces.
   * @param grams - Mass in grams.
   * @returns Mass in ounces.
   */
  static gramsToOunces(grams: number): number {
    return grams * 0.0352739619;
  }

  /**
   * Converts Ounces to Grams.
   * @param ounces - Mass in ounces.
   * @returns Mass in grams.
   */
  static ouncesToGrams(ounces: number): number {
    return ounces / 0.0352739619;
  }

  // Pressure conversions

  /**
   * Converts Pascal to PSI.
   * @param pascal - Pressure in pascals.
   * @returns Pressure in pounds per square inch (psi).
   */
  static pascalToPsi(pascal: number): number {
    return pascal * 0.0001450377;
  }

  /**
   * Converts PSI to Pascal.
   * @param psi - Pressure in pounds per square inch (psi).
   * @returns Pressure in pascals.
   */
  static psiToPascal(psi: number): number {
    return psi / 0.0001450377;
  }

  /**
   * Converts Bar to Atmospheres.
   * @param bar - Pressure in bar.
   * @returns Pressure in atmospheres.
   */
  static barToAtmosphere(bar: number): number {
    return bar * 0.9869232667;
  }

  /**
   * Converts Atmospheres to Bar.
   * @param atm - Pressure in atmospheres.
   * @returns Pressure in bar.
   */
  static atmosphereToBar(atm: number): number {
    return atm / 0.9869232667;
  }

  // Length conversions

  /**
   * Converts Meters to Feet.
   * @param meters - Length in meters.
   * @returns Length in feet.
   */
  static metersToFeet(meters: number): number {
    return meters * 3.280839895;
  }

  /**
   * Converts Feet to Meters.
   * @param feet - Length in feet.
   * @returns Length in meters.
   */
  static feetToMeters(feet: number): number {
    return feet / 3.280839895;
  }

  /**
   * Converts Kilometers to Miles.
   * @param km - Distance in kilometers.
   * @returns Distance in miles.
   */
  static kilometersToMiles(km: number): number {
    return km * 0.6213711922;
  }

  /**
   * Converts Miles to Kilometers.
   * @param miles - Distance in miles.
   * @returns Distance in kilometers.
   */
  static milesToKilometers(miles: number): number {
    return miles / 0.6213711922;
  }
}
